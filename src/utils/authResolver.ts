const authResolver = resolverFunction => async (
    parent,
    args,
    context,
    info
) => {
    if (!context.req.user) {
        throw new Error("No JWT. I refuse to proceed");
    }
    const resloved = await resolverFunction(parent, args, context, info);
    return resloved;
};

export default authResolver;
