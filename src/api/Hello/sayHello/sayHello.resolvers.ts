import { Greeting } from "src/types/graph";

const resolvers = {
    Query: {
        sayHello: (): Greeting => {
            return {
                error: false,
                text: "Hey hello how are ya"
            };
        }
    }
};

export default resolvers;
