export const getDataLandingByNumber = (data = [],num) => {
    return data.filter((e)=>(e.number === num))[0];
}