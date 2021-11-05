<template>
<div>


<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h1 class="title">Recommandations en matiere d’apport quotidien en proteines</h1>

     
        <a><img v-lazy="img[0]" fluid height="400px"></a>
        
      <br>
     
    </div>
    <div class="card">
           <h1 class="title">Quelle nourriture Royal Canin choisir pour les chiots de deux mois ?
</h1>

      
      
      <img  style="height:250px; float: right;" v-lazy="img[1]" fluid height="400px">
      <p class="p"> Les petits chiots âgés de deux mois environ sont encore en pleine croissance, leurs corps a donc des besoins complètement différents de celui des chiens adultes. Ses besoins doivent être pris en compte au moment de choisir la bonne nourriture afin que votre chiot devienne un adulte affectueux et en bonne santé. Pour cette raison, en tant que propriétaire, vous devez toujours prendre en charge votre responsabilité pour votre chaton et toujours choisir la bonne nourriture qui a été développée entièrement et parfaitement en accord avec les besoins des chiots.

Il n’est pas facile de trouver le bon compromis parmi le large éventail de produits alimentaires disponibles, pour votre chiot. La marque Royal Canin a comme objectif de fournir à votre chiot de la nourriture pour chien de haute qualité et non seulement il peut lui fournir des vitamines et des éléments nutritifs, mais aussi l’aider pour la croissance de ses os et bénéficier de soins s’ils ont une digestion sensible.

Cet article vous fournira beaucoup de renseignements importants concernant l’alimentation Royal Canin pour chien afin que vous puissiez choisir le produit parfait pour votre chiot de deux mois.</p>
    </div>
  </div>
  <div style="margin-top:19px" class="rightcolumn">
    <div class="card">
      <h2>About Me</h2>
      <div class="fakeimg" style="height:100px;">Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div class="card">
      <h3>Popular Post</h3>
      <div class="fakeimg">Image</div><br>
      <div class="fakeimg">Image</div><br>
      <div class="fakeimg">Image</div>
    </div>
    <div class="card">
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </div>
  </div>
</div>

  
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        "https://www.zoobio.fr/blog/wp-content/uploads/sites/6/2017/05/recommandations-en-matiere.jpg",
      "https://www.zoobio.fr/blog/wp-content/uploads/sites/6/2017/02/chiens-chiots-qui-alimentation.jpeg"
      ]
    };
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

/* Add a gray background color with some padding */
body {
  font-family: Arial;
  padding: 20px;
  background: #f1f1f1;
}

/* Header/Blog Title */
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {   
  float: left;
  width: 75%;
}
.title{
      font-family: 'Roboto';
    font-weight: normal;
    font-size: 38px;
    color: #555555;line-height: 1.1;margin-bottom: 30px


}
/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}
.p{ font-family: 'Roboto';
  line-height: 1.3;
}
/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
   background-color: white;
   padding: 20px;
   margin-top: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn,.title {   
    width: 100%;
    padding: 0;
  }
}
@media screen and (max-width: 800px) {
  .title {   
    font-family: 'Roboto';
    font-weight: normal;
    font-size: 20px;
    color: #555555;line-height: 1.1;margin-bottom: 20px;
  }
}
</style>
