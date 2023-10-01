const box = document.getElementById("box");
const yt_url = "https://youtu.be/";
const pagi_elem = document.getElementById("pagination");
const order = document.getElementById("order");
const reset_btn = document.getElementById("reset");
const form = document.getElementById("search");
const state = {
    search:"",
    filter:"l-to-o",
    cur_page:1
}
const data = [
    {
        name:"first website of my life",
        keywords:"html, css",
        link:"https://codepen.io/manish202/pen/JjGgVvL",
        date:"02/08/2020",
        youtube:null,
        thumbnail:"bata_shoes.png"
    },
    {
        name:"live analog clock using javascript",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/pen/YzqXpGL",
        date:"09/08/2020",
        youtube:null,
        thumbnail:"analog_clock.png"
    },
    {
        name:"css button animation",
        keywords:"html, css",
        link:"https://codepen.io/manish202/pen/jOqPxBp",
        date:"10/08/2020",
        youtube:null,
        thumbnail:"button_animation.png"
    },
    {
        name:"html css slider no javascript",
        keywords:"html, css",
        link:"https://codepen.io/manish202/pen/NWNGorE",
        date:"12/08/2020",
        youtube:null,
        thumbnail:"slider.png"
    },
    {
        name:"css js animation",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/pen/poyyzwG",
        date:"14/08/2020",
        youtube:null,
        thumbnail:"js_anim.png"
    },
    {
        name:"html css hover animation",
        keywords:"html, css",
        link:"https://codepen.io/manish202/pen/wvGGXQx",
        date:"16/08/2020",
        youtube:null,
        thumbnail:"css_hover.png"
    },
    {
        name:"cloth website",
        keywords:"html, css",
        link:"https://codepen.io/manish202/full/VwajeMN",
        date:"17/08/2020",
        youtube:null,
        thumbnail:"cloth_website.png"
    },
    {
        name:"fitness landing page website",
        keywords:"html, css",
        link:"https://codepen.io/manish202/full/OJNZLYN",
        date:"11/09/2020",
        youtube:null,
        thumbnail:"fitness.png"
    },
    {
        name:"digital studio website",
        keywords:"html, css",
        link:"https://codepen.io/manish202/full/WNwJBpN",
        date:"13/09/2020",
        youtube:null,
        thumbnail:"digital_studio.png"
    },
    {
        name:"education mp4",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/oNxQzVK",
        date:"21/09/2020",
        youtube:null,
        thumbnail:"ed_mp4.png"
    },
    {
        name:"css js animation",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/ZEWmZBK",
        date:"22/09/2020",
        youtube:null,
        thumbnail:"js_anim2.png"
    },
    {
        name:"splendorous website",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/GRqoGvL",
        date:"15/10/2020",
        youtube:null,
        thumbnail:"splendorous.png"
    },
    {
        name:"chillaid website",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/qBNxKLR",
        date:"29/10/2020",
        youtube:null,
        thumbnail:"chillaid.png"
    },
    {
        name:"the modernist website",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/ZEOoRPP",
        date:"02/11/2020",
        youtube:null,
        thumbnail:"modernist.png"
    },
    {
        name:"klassy restaurants",
        keywords:"Html, Css, Bootstrap 4, Jquery, Owl Carousel",
        link:"https://manish202.github.io/restaurants/",
        date:"26/11/2020",
        youtube:"wYGq93IEX9M",
        thumbnail:"klassy.png"
    },
    {
        name:"fashion hub clothing site",
        keywords:"Html, Css, Bootstrap 4, Jquery, Aos",
        link:"https://manish202.github.io/fashion-hub/",
        date:"18/12/2020",
        youtube:"jnCWAAi7Nyw",
        thumbnail:"fashionhub.png"
    },
    {
        name:"covid 19 api",
        keywords:"Html, Css, Jquery, Ajax",
        link:"https://manish202.github.io/covid-19-api/",
        date:"05/01/2021",
        youtube:null,
        thumbnail:"covid.png"
    },
    {
        name:"blogging",
        keywords:"Html, Css, Bootstrap 4, Jquery",
        link:"https://manish202.github.io/blogging/",
        date:"23/02/2021",
        youtube:"leIeU5w99vM",
        thumbnail:"sora24.png"
    },
    {
        name:"random color generator",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/QWGYJRe",
        date:"13/03/2021",
        youtube:null,
        thumbnail:"color_gen.png"
    },
    {
        name:"live chart clock",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/VwmRKGV",
        date:"14/03/2021",
        youtube:null,
        thumbnail:"chart-clock.png"
    },
    {
        name:"quiz api with fetch method",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/BaQbbpm",
        date:"15/03/2021",
        youtube:null,
        thumbnail:"quiz_api.png"
    },
    {
        name:"card hover, dropdown menu, tabs, accordions",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/gOgYWVZ",
        date:"22/03/2021",
        youtube:null,
        thumbnail:"css_anim3.png"
    },
    {
        name:"glassmorphism animations & clock",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/YzNPqXw",
        date:"23/03/2021",
        youtube:null,
        thumbnail:"glassmorphism.png"
    },
    {
        name:"shopnow php ecommerce",
        keywords:"html, css, jquery, php",
        link:"https://github.com/manish202/shopnow-php-ecommerce",
        date:"16/04/2021",
        youtube:"Ln1CVDOQ46c",
        thumbnail:"shop-now.png"
    },
    {
        name:"free web templates",
        keywords:"Html, Css, Bootstrap 4, Jquery, Aos",
        link:"https://manish202.github.io/freewebtemplates/",
        date:"09/06/2021",
        youtube:"OFgl7LOtqMI",
        thumbnail:"freewebtemp.png"
    },
    {
        name:"quantum electronic site",
        keywords:"Html, Css, Bootstrap 4, Jquery",
        link:"https://manish202.github.io/quantum/",
        date:"23/06/2021",
        youtube:"IBxqWj6t-lg",
        thumbnail:"quantum.png"
    },
    {
        name:"animjs animation",
        keywords:"html, css, javascript, animjs",
        link:"https://codepen.io/manish202/full/XWREWMm",
        date:"28/07/2021",
        youtube:null,
        thumbnail:"animjs.png"
    },
    {
        name:"snake game with svg",
        keywords:"html, css, svg, javascript",
        link:"https://codepen.io/manish202/full/GRmBWYB",
        date:"03/08/2021",
        youtube:null,
        thumbnail:"snake.png"
    },
    {
        name:"scroll animation",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/oNWMwJj",
        date:"03/08/2021",
        youtube:null,
        thumbnail:"scroll_anim.png"
    },
    {
        name:"bitzhub clothing site",
        keywords:"Html, Css",
        link:"https://manish202.github.io/bitzhub/",
        date:"12/08/2021",
        youtube:"5gDZ3_wpxCU",
        thumbnail:"bitzhub.png"
    },
    {
        name:"fashion clothing site",
        keywords:"Html, Css, Jquery, swiper js",
        link:"https://manish202.github.io/clothing_site/",
        date:"12/08/2021",
        youtube:null,
        thumbnail:"fashion.png"
    },
    {
        name:"kirana store",
        keywords:"Html, Css, Jquery",
        link:"https://manish202.github.io/kirana-store/",
        date:"20/08/2021",
        youtube:null,
        thumbnail:"ashapuri_gro.png"
    },
    {
        name:"ashapurionline grocery store",
        keywords:"Html, Css, Jquery, php, mysql, ajax, re-captcha, admin panel",
        link:"https://kiranatest.000webhostapp.com/",
        date:"15/10/2021",
        youtube:null,
        thumbnail:"ashapurionline.png"
    },
    {
        name:"dna animation",
        keywords:"html, css",
        link:"https://codepen.io/manish202/pen/poWwQVO",
        date:"20/12/2021",
        youtube:null,
        thumbnail:"dna_anim.png"
    },
    {
        name:"bootstrap website",
        keywords:"html, css, bootstrap, javascript",
        link:"https://codepen.io/manish202/full/VwMWqZp",
        date:"20/12/2021",
        youtube:null,
        thumbnail:"bt_design.png"
    },
    {
        name:"html css animation",
        keywords:"html, css",
        link:"https://codepen.io/manish202/full/BawZvwG",
        date:"20/12/2021",
        youtube:null,
        thumbnail:"css_anim4.png"
    },
    {
        name:"random animation",
        keywords:"html, css",
        link:"https://codepen.io/manish202/full/mdqyabd",
        date:"27/01/2022",
        youtube:null,
        thumbnail:"rand_anim.png"
    },
    {
        name:"gold jewellery",
        keywords:"Html, Css, Javascript",
        link:"https://manish202.github.io/gold/",
        date:"30/01/2022",
        youtube:"jI3OnsnVhZE",
        thumbnail:"gold.png"
    },
    {
        name:"meme api site",
        keywords:"Html, Css, Javascript, Ajax",
        link:"https://manish202.github.io/meme-api/",
        date:"31/01/2022",
        youtube:null,
        thumbnail:"memeapi.png"
    },
    {
        name:"first react website",
        keywords:"Html, Css, ReactJs",
        link:"https://manish202.github.io/FirstReactWebsite/",
        date:"09/02/2022",
        youtube:"rCyaNhq8CJA",
        thumbnail:"first_react.png"
    },
    {
        name:"ashapurionline blog",
        keywords:"Html, Css, Jquery, Php, Mysql, Ajax, Google Analytics, Admin Panel",
        link:"https://ashapurionline.000webhostapp.com/",
        date:"18/02/2022",
        youtube:null,
        thumbnail:"ashapuri_blog.png"
    },
    {
        name:"bootstrap 5 & git",
        keywords:"Html, Css, Bootstrap 5, Git, Github",
        link:"https://manish202.github.io/bt5/",
        date:"25/02/2022",
        youtube:null,
        thumbnail:"bt5.png"
    },
    {
        name:"React + Cat API + Unlimited Scroll",
        keywords:"Html, Css, ReactJs",
        link:"https://manish202.github.io/CatApi/",
        date:"27/02/2022",
        youtube:null,
        thumbnail:"catapi.png"
    },
    {
        name:"live rotating fan animation",
        keywords:"html, css",
        link:"https://codepen.io/manish202/full/ExoNyMN",
        date:"23/03/2022",
        youtube:"nI2qL-JiCNA",
        thumbnail:"fan.png"
    },
    {
        name:"basic digital clock",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/MWrpvmg",
        date:"26/03/2022",
        youtube:"ASJEq5Ebg2s",
        thumbnail:"clock2.png"
    },
    {
        name:"Php Basic Crud No Jquery No Javascript",
        keywords:"Html, Css, Bootstrap, Php, Mysql",
        link:"https://github.com/manish202/php_crud/tree/main/basic_ajax_crud_no_js",
        date:"18/06/2022",
        youtube:"t5PIVXn4qt8",
        thumbnail:"basic_crud.png"
    },
    {
        name:"Php News Blog With CMS",
        keywords:"Html, Css, Bootstrap, Php, Mysql",
        link:"https://github.com/manish202/php_news_blog",
        date:"19/06/2022",
        youtube:"Wj95Q2MEG3g",
        thumbnail:"php_news_blog.png"
    },
    {
        name:"Jquery Ajax Crud Php",
        keywords:"Html, Css, Bootstrap, Jquery, Php, Mysql",
        link:"https://github.com/manish202/php_crud/tree/main/jquery_ajax_crud",
        date:"22/06/2022",
        youtube:"rdhhUkutAb0",
        thumbnail:"ajax_crud.png"
    },
    {
        name:"auto number increment",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/QWQeGzM",
        date:"24/06/2022",
        youtube:null,
        thumbnail:"auto_num_inc.png"
    },
    {
        name:"react php mysql api crud",
        keywords:"Html, Css, Bootstrap 5, ReactJs, php, mysql, ajax",
        link:"https://github.com/manish202/react_php_mysql_api_crud",
        date:"27/06/2022",
        youtube:"sbraSWWuUd8",
        thumbnail:"react-php-mysql-api-crud.png"
    },
    {
        name:"react js todo list",
        keywords:"Html, Css, Bootstrap 5, ReactJs",
        link:"https://manish202.github.io/react_crud/",
        date:"03/07/2022",
        youtube:"mcJ4xv6t8kY",
        thumbnail:"reactbt5.png"
    },
    {
        name:"react js checkout cart page",
        keywords:"Html, Css, ReactJs, Mui",
        link:"https://manish202.github.io/react_cart/",
        date:"09/07/2022",
        youtube:null,
        thumbnail:"reactcart.png"
    },
    {
        name:"react js random movies using api",
        keywords:"Html, Css, ReactJs, Ajax",
        link:"https://manish202.github.io/random-movies/",
        date:"12/07/2022",
        youtube:"AfsUMJeRMvU",
        thumbnail:"movieapi.png"
    },
    {
        name:"react js news api",
        keywords:"Html, Css, ReactJs, Ajax",
        link:"https://manish202.github.io/react-news-api/",
        date:"13/07/2022",
        youtube:"EbRB5nZH5XY",
        thumbnail:"newsapi.png"
    },
    {
        name:"react firebase project",
        keywords:"Html, Css, ReactJs, firebase",
        link:"https://github.com/manish202/firebase-auth",
        date:"16/07/2022",
        youtube:"5kSfWtJcw8o",
        thumbnail:"firebase-react.png"
    },
    {
        name:"react js manishpay",
        keywords:"Html, Css, ReactJs",
        link:"https://manish202.github.io/manishpay/",
        date:"19/07/2022",
        youtube:null,
        thumbnail:"manishpay.png"
    },
    {
        name:"MERN Auth Project",
        keywords:"Html, Css, Reactjs, Bcryptjs, Expressjs, Mongoose, Jwt Etc...",
        link:"https://github.com/manish202/mern-auth",
        date:"24/07/2022",
        youtube:"sM372X9YV0Y",
        thumbnail:"mern-auth.png"
    },
    {
        name:"blinkit clone MERN",
        keywords:"Html, Css, ReactJs, Ajax, SwiperJs, Get User Location, MongoDb, ExpressJs, Mongoose",
        link:"https://blinkit-clone.onrender.com/",
        date:"30/07/2022",
        youtube:"zgu9j3mPMBw",
        thumbnail:"blinkit.png"
    },
    {
        name:"pure js todo with localstorage",
        keywords:"Html, Css, Javascript",
        link:"https://manish202.github.io/javascript-projects/todo/",
        date:"28/08/2022",
        youtube:"6g1jkK1B6n0",
        thumbnail:"purejstodo.png"
    },
    {
        name:"js timers & clock",
        keywords:"Html, Css, Javascript",
        link:"https://manish202.github.io/javascript-projects/timer/",
        date:"29/08/2022",
        youtube:"XnbMXGWt4_Q",
        thumbnail:"jsclock.png"
    },
    {
        name:"js budget app",
        keywords:"Html, Css, Javascript",
        link:"https://manish202.github.io/javascript-projects/budgetapp/",
        date:"30/08/2022",
        youtube:"YyWQ-blmsIs",
        thumbnail:"budgetapp.png"
    },
    {
        name:"js calculator",
        keywords:"Html, Css, Javascript",
        link:"https://manish202.github.io/javascript-projects/calculator/",
        date:"30/08/2022",
        youtube:"cPm1I2Jua4Q",
        thumbnail:"calculator.png"
    },
    {
        name:"js carousel",
        keywords:"Html, Css, Javascript",
        link:"https://manish202.github.io/javascript-projects/carousel/",
        date:"30/08/2022",
        youtube:"JYtcIFwsgmg",
        thumbnail:"carousel.png"
    },
    {
        name:"js random password generator",
        keywords:"Html, Css, Javascript",
        link:"https://manish202.github.io/javascript-projects/pass_generator/",
        date:"03/09/2022",
        youtube:"ugvASGPlZOg",
        thumbnail:"passgen.png"
    },
    {
        name:"js random color generator",
        keywords:"Html, Css, Javascript",
        link:"https://manish202.github.io/javascript-projects/color_generator/",
        date:"05/09/2022",
        youtube:"9LDn7snsNvc",
        thumbnail:"colorgen.png"
    },
    {
        name:"js chart clock",
        keywords:"Html, Css, Javascript",
        link:"https://manish202.github.io/javascript-projects/chart_clock/",
        date:"06/09/2022",
        youtube:"yeT6jX1_5Yk",
        thumbnail:"chartclock.png"
    },
    {
        name:"responsive multiple dropdown menu",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/full/qBYLdaO",
        date:"11/10/2022",
        youtube:"7CS84jnnjd4",
        thumbnail:"dropdown-nav.png"
    },
    {
        name:"Print a table containing multiplication tables",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/pen/wvjbEGx",
        date:"19/10/2022",
        youtube:null,
        thumbnail:"mult_table.png"
    },
    {
        name:"Data Converter Like GB To KB",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/pen/poVXeWm",
        date:"20/10/2022",
        youtube:null,
        thumbnail:"data_conv.png"
    },
    {
        name:"Age Calculator Using Javascript",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/pen/vYjqWxE",
        date:"20/10/2022",
        youtube:null,
        thumbnail:"age_calc.png"
    },
    {
        name:"Time Converter In Javascript",
        keywords:"html, css, javascript",
        link:"https://codepen.io/manish202/pen/vYjqpVp",
        date:"20/10/2022",
        youtube:null,
        thumbnail:"time_conv.png"
    },
    {
        name:"Random Dog Images Api With Fetch",
        keywords:"html, css, javascript, ajax",
        link:"https://codepen.io/manish202/full/mdKJBmr",
        date:"28/10/2022",
        youtube:"_FvdHVpgX3I",
        thumbnail:"dog_img_api.png"
    },
    {
        name:"React Node Fs Crud Job Challenge",
        keywords:"html, css, reactjs, nodejs",
        link:"https://github.com/manish202/react_node_json_crud",
        date:"11/11/2022",
        youtube:"K2MRjje5X-g",
        thumbnail:"react-node-fs-crud.png"
    },
    {
        name:"Github Users Api Job Challenge",
        keywords:"html, css, reactjs",
        link:"https://github-users-api.onrender.com/",
        date:"08/12/2022",
        youtube:"plCei6NRCNo",
        thumbnail:"github-users-api.png"
    },
    {
        name:"hair salon wordpress website",
        keywords:"wordpress",
        link:"https://github.com/manish202/laima_unisex_salon",
        date:"30/12/2022",
        youtube:"5xx0YYk89yY",
        thumbnail:"laima-unisex.png"
    },
    {
        name:"My Personal Portfolio Website",
        keywords:"html, css, javascript",
        link:"https://manish202.github.io/portfolio/",
        date:"04/01/2023",
        youtube:null,
        thumbnail:"my-portfolio.png"
    },
    {
        name:"onwardpass flight reservation",
        keywords:"html, css, jquery, php, mysql",
        link:"https://onwardpass.com/",
        date:"08/01/2023",
        youtube:null,
        thumbnail:"onwardpass.png"
    },
    {
        name:"naans & curries react website",
        keywords:"html, css, reactjs",
        link:"https://naans-and-curries.onrender.com/",
        date:"11/06/2023",
        youtube:null,
        thumbnail:"naans-curries.png"
    },
    {
        name:"Indulge hair salon",
        keywords:"html, css, reactjs, nextjs",
        link:"https://indulgestyle.onrender.com/",
        date:"17/06/2023",
        youtube:null,
        thumbnail:"indulge.png"
    },
    {
        name:"React mui todo app",
        keywords:"html, css, reactjs, mui",
        link:"https://react-todo-app-o1je.onrender.com/",
        date:"12/08/2023",
        youtube:null,
        thumbnail:"react-mui-todo-app.png"
    },
    {
        name:"React mui weather app",
        keywords:"html, css, reactjs, mui",
        link:"https://react-weather-app-mui.onrender.com/",
        date:"13/08/2023",
        youtube:null,
        thumbnail:"weather-app.png"
    },
    {
        name:"React music player app",
        keywords:"html, css, reactjs, mui",
        link:"https://reactjs-music-player.onrender.com/",
        date:"29/09/2023",
        youtube:null,
        thumbnail:"reactjs-music-player.png"
    }
];
const refreshData = () => {
    box.innerHTML = "";
    const limit = 10;
    let offset = (state.cur_page - 1)*limit;
    let temp_data = (state.filter === "l-to-o") ? [...data].reverse():[...data];
    if(state.search != ""){
        temp_data = temp_data.filter((val) => {
            return (val.name +" "+val.keywords).includes(state.search); 
        });
    }
    for(let i=offset;i<(offset+limit);i++){
        if(!temp_data[i]) break;
        let {link,thumbnail,name,date,keywords} = temp_data[i];
        box.insertAdjacentHTML("beforeend",
            `<a target="_blank" href="${link}" class="card">
                <div class="img-bx">
                    <img src="images/${thumbnail}" alt="${name}">
                </div>
                <div class="title">
                    <h3>${name} (${date})</h3>
                    <span>[${keywords}]</span>
                </div>
            </a>`
        );
    }
    //pagination part
    pagi_elem.innerHTML = "";
    const totalData = temp_data.length;
    const totalPage = Math.ceil(totalData / limit);
    for(let i=1;i<=totalPage;i++){
        let active = state.cur_page == i ? "active":"";
        pagi_elem.insertAdjacentHTML("beforeend",
        `<button data-page='${i}' class="btn pagi ${active}" type="button">${i}</button>`);
    }
}
refreshData();
document.addEventListener("click",(e) => {
    let elem = e.target;
    if(elem.classList.contains("pagi")){
        let page = elem.dataset.page;
        if(page != undefined){
            state.cur_page = page;
            refreshData();
        }
    }
});
order.addEventListener("change",(e) => {
    state.filter = e.target.value;
    state.cur_page = 1;
    refreshData();
});
reset_btn.addEventListener("click",() => {
    state.search = "";
    state.filter = "l-to-o";
    state.cur_page = 1;
    order.value = "l-to-o";
    form.reset();
    refreshData();
});
form.addEventListener("submit",(e) => {
    e.preventDefault();
    let term = e.target.term.value.trim();
    if(term != ""){
        state.cur_page = 1;
        state.search = term;
        refreshData();
    }else{
        alert("please search something");
    }
})