import { Resolvers } from "../../../types/resolvers";
import {
    EmailSignUpResponse,
    EmailSignUpMutationArgs
} from "../../../types/graph";
import User from "../../../entities/User";
import createJWT from "../../../utils/createJWT";
import Verification from "../../../entities/Verification";
import { sendVerificationEmail } from "../../../utils/sendEmail";

const resolvers: Resolvers = {
    Mutation: {
        EmailSignUp: async (
            _,
            args: EmailSignUpMutationArgs
        ): Promise<EmailSignUpResponse> => {
            const { email } = args;
            try {
                const existingUser = await User.findOne({ email });
                if (existingUser) {
                    return {
                        ok: false,
                        error: "You should log in instead",
                        token: null
                    };
                } else {
                    const phoneVerification = await Verification.findOne({
                        payload: args.phoneNumber,
                        verified: true
                    });

                    if (phoneVerification) {
                        const newUser = await User.create({ ...args }).save();
                        if (newUser.email) {
                            const emailVerification = await Verification.create(
                                {
                                    payload: newUser.email,
                                    target: "EMAIL"
                                }
                            );

                            // mailgun 의 유료 계정 전환 후 to 변경 필요 함
                            await sendVerificationEmail(
                                // newUser.email,
                                "assavictory@gmail.com",
                                newUser.fullName,
                                emailVerification.key
                            );
                        }
                        const token = createJWT(newUser.id);

                        return {
                            ok: true,
                            error: null,
                            token
                        };
                    } else {
                        return {
                            ok: false,
                            error: "You haven't verified your phone number",
                            token: null
                        };
                    }
                }
            } catch (error) {
                return {
                    ok: false,
                    error: error.message,
                    token: null
                };
            }
        }
    }
};

export default resolvers;
