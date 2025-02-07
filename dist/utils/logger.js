const LOG_TREE = false;
export const logger = {
    tree: (...args) => {
        if (LOG_TREE)
            console.log(args);
    }
};
//# sourceMappingURL=logger.js.map