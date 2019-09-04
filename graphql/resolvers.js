const MessageModel = require('../models/Message');

module.exports = {
  getMessage: async function ({id}) {
    let message = await MessageModel.findById(id)
    if (!message) {
      throw new Error(`There is no message with id: ${id}`);
    }
    return new Message(id, message);
  },
  getMessages: async function() {
    return await MessageModel.find();
  },
  createMessage: async function({input}) {
   let newMessage = new MessageModel({content: input.content, author: input.author});
   let respond = await newMessage.save();

    return new Message(respond._id, {
      content: respond.content,
      author: respond.author
    });
  }, 
  updateMessage: async function({id, input}) {
    let respond = await MessageModel.findByIdAndUpdate(id, {author: input.author, content: input.content});
    return this.getMessage({id : respond._id})
    
    // This not work as I wanted
    // return new Message(respond._id, {
    //   content: respond.content,
    //   author: respond.author
    // }); 
  }

}

// async function addMessage({author, content}){
//   let newMessage = new MessageModel({author, content});
//   return await newMessage.save();
// }


class Message {
  constructor(id, {content, author}){
    this.id = id;
    this.content = content;
    this.author = author;
  }
}