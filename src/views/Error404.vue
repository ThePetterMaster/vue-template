<template>
    <div id="notfound">
        <div class="notfound">
            <div class="notfound-404">
                <h3>Oops! Página não encontrada</h3>
                <h1><span>4</span><span>0</span><span>4</span></h1>
            </div>
            <h2>Pedimos desculpas, mas a página que requisitou não foi encontrada</h2>
        </div>
    </div>
</template>
<style scoped>
#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}

.notfound .notfound-404 {
  position: relative;
  height: 240px;
}

.notfound .notfound-404 h3 {
  font-family: 'Cabin', sans-serif;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #262626;
  margin: 0px;
  letter-spacing: 3px;
  padding-left: 6px;
}

.notfound .notfound-404 h1 {
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 252px;
  font-weight: 900;
  margin: 0px;
  margin-left: 0px;
  color: #262626;
  text-transform: uppercase;
  letter-spacing: -40px;
  margin-left: -20px;
}

.notfound .notfound-404 h1>span {
  text-shadow: -8px 0px 0px #fff;
}</style>