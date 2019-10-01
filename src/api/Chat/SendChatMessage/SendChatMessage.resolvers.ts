import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import {
    SendChatMessageMutationArgs,
    SendChatMessageResponse
} from "../../../types/graph";

const resolvers: Resolvers = {
    Mutation: {
        SendChatMessage: privateResolver(
            async (
                _,
                args: SendChatMessageMutationArgs,
                { req }
            ): Promise<SendChatMessageResponse> => {
                console.log("!");
            }
        )
    }
};

export default resolvers;
