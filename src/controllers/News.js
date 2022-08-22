const NewsModel = require('../models/News');

class NewsController {

  async create(req, res){

    const news = new NewsModel(req.body);
    await news
    .save()
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
  }


  async update(req, res){

    await NewsModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    });

  }


  async getAll(req, res){

    const findParams = req?.query?.search 

    ? {
      $or:[ 
        {'title':
          {
           $regex: `.*${req.query.search}.*`
          }
        }, 
        {
          'description':
          { 
            $regex: `.*${req.query.search}.*` 
          }
        } 
      ]
    }
    : {}
    await NewsModel.find(findParams)
          .sort('posted')
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }

  async getById(req, res){

    await NewsModel.findById(req.params.id)
    .then(response => {
      if(response)
        return res.status(200).json(response);
      else
        return res.status(404).json({error: 'News not found'});
    })
    .catch(error => {
      return res.status(500).json(error);
    });
  }


  async getByCategoryID(req, res){

    const findParams = req?.query?.search 
    ? {
        'category': req.params.category, 
        $or:[ 
          {
            'title':
            {
               $regex: `.*${req.query.search}.*` 
            }
          }, 
          {'description':{ $regex: `.*${req.query.search}.*` }} 
        ]
      }

    : 
    
    {
      'category': req.params.category
    }
    await NewsModel
    .find(findParams)
    .sort('posted')
    .then( response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
  }


  async remove(req, res){

    await NewsModel.deleteOne({'_id': req.params.id})
   .then(response => {
       return res.status(200).json(response);
    })
    .catch(error => {
       return res.status(500).json(error);
    });
  }
}

module.exports = new NewsController();