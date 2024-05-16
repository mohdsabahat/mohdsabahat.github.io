
export const findInputError = (errors: any, name: string) =>{
    const filtered = Object.keys(errors)
        .filter(key => key===name)
        .reduce((obj, key) => {
            return Object.assign(obj, { error: errors[key] })
        }, {});
    return filtered;
}

export const isFormInvalid = (error :any ): boolean => {
    if (Object.keys(error).length > 0) {
        return true;
    }
    return false;
}