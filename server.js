import data from './db.json';

function Get(id){
    const questions = data;
    for(let question of questions){
        if(question.id === id) return question;
    }
    return new Error(`Question of id:${id} is not found`);
}
function GetAll(){
      return data.questions;
}
function Post(questions){
  console.log("questions");
}
export const Api = {
    Get,
    GetAll,
    Post
};
