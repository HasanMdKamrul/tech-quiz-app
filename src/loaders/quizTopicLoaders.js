const quizTopicsLoader = async ()=>{
    const topics = await fetch(`https://openapi.programming-hero.com/api/quiz`);
    return topics;
}

export default quizTopicsLoader;