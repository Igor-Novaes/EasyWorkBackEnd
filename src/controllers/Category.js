const {CategoryModel} = require('../models/Category');

class CategoryController {

  async createCategory(req, res){

    const category = new CategoryModel(req.body);
    await category
    .save()
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
  }


  async updateCategory(req, res){

    await CategoryModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    });

  }


  async getAllCategory(req, res){
    
    await CategoryModel.find()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }


  async getByIdCategory(req, res){

    await CategoryModel.findById(req.params.id)
    .then(response => {
      if(response)
        return res.status(200).json(response);
      else
        return res.status(404).json({error: 'Categoria não encontrada'});
    })
    .catch(error => {
      return res.status(500).json(error);
    });
  }


  async removeCategory(req, res){

    await CategoryModel.deleteOne({'_id': req.params.id})
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }
}

module.exports = new CategoryController();