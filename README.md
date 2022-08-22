<h1>Deployed</h1>
<h3>https://easyworkapi.herokuapp.com/</h3>

<h1>Routes</h1>
<h2>News</h2>

<h3>get all news</h3>
<h4>news/</h4>

<h3>get news by id</h3>
<h4>news/:id</h4>

<h3>get news by category id</h3>
<h4>news/category/:id</h4>

<h3>create news</h3>
<h4>news/create</h4>
<h5>{
    type: idCategory,
    title: string,
    text: string,
    }
</h4>

<h3>update news</h3>
<h4>news/id:</h4>
<h5>{
    type: idCategory,
    title: string,
    text: string,
    }
</h4>

<h3>delete news</h3>
<h4>news/id:</h4>



<hr />


<h2>Category</h2>

<h3>get all category</h3>
<h4>category/</h4>

<h3>get category by id</h3>
<h4>category/:id</h4>


<h3>create category</h3>
<h4>category/create</h4>
<h5>{
    type: idCategory,
    }
</h4>

<h3>update category</h3>
<h4>category/id:</h4>
<h5>{
    type: idCategory,
    }
</h4>

<h3>delete category</h3>
<h4>category/id:</h4>

