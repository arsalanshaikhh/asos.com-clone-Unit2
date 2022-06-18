document.querySelector("#shoesHover").addEventListener("mouseover",dropDownShoe1);
document.querySelector("#saleHover").addEventListener("mouseover",dropDownShow2)
document.querySelector("#newInHover").addEventListener("mouseover",dropDownShow3)
document.querySelector("#clothingHover").addEventListener("mouseover",dropDownShow4)
document.querySelector("#sportswearHover").addEventListener("mouseover",dropDownShow5)
document.querySelector("#accessoriesHover").addEventListener("mouseover",dropDownShow6)
document.querySelector("#summerHover").addEventListener("mouseover",dropDownShow7)
document.querySelector("#trendingNowHover").addEventListener("mouseover",dropDownShow8)
document.querySelector("#topmanHover").addEventListener("mouseover",dropDownShow9)
document.querySelector("#facePlusBodyHover").addEventListener("mouseover",dropDownShow10)
document.querySelector("#brandHover").addEventListener("mouseover",dropDownShow11)
document.querySelector("#outletHover").addEventListener("mouseover",dropDownShow12)
document.querySelector("#marketPlaceHover").addEventListener("mouseover",dropDownShow13)
 let liveData;  

 
 
 function dropDownShow5(){}
 function dropDownShow7(){}
 function dropDownShow9(){}
 function dropDownShow10(){}
 function dropDownShow11(){}
 function dropDownShow13(){}
 function dropDownShow12(){}
//  document.querySelector("#hoverDropdown4").addEventListener("mouseout",dropDownShoe2)

{/* <div></div>
        <div id="saleHover">Sale</div>
        <div id="newInHover">New in</div>
        <div id="clothingHover">Clothing</div>
        <div id="shoesHover">Shoes</div>
        <div id="sportswearHover">Sportswear</div>
        <div id="accessoriesHover">Accessories</div>
        <div id="summerHover">Summer</div>
        <div id="trendingNowHover">Trending Now</div>
        <div id="topmanHover">Topman</div>
        <div id="facePlusBodyHover">Face + Body</div>
        <div id="brandHover">Brands</div>
        <div id="outletHover">Outlet</div>
        <div id="marketPlaceHover">Marketplace</div>
        <div></div> */}
function dropDownShoe1(event){
    document.querySelector("#headPart4").innerHTML="";
    document.querySelector("#headPart4").style.display="block";
    let div=document.createElement("div");
    div.setAttribute("id","hoverDropdown4");
    document.querySelector("#headPart4").append(div);

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");

    div1.setAttribute("class","normalList");
    div2.setAttribute("class","normalList");
    div3.setAttribute("class","rectTwoImageList1");

    div.append(div1,div2,div3);

    let list1=document.createElement("ul");
    let h3=document.createElement("h3");
    let ls1=document.createElement("li");
    let ls2=document.createElement("li");
    let ls3=document.createElement("li");
    let ls4=document.createElement("li");
    let ls5=document.createElement("li");
    let ls6=document.createElement("li");
    let ls7=document.createElement("li");
    let ls8=document.createElement("li");
    let ls9=document.createElement("li");
    let ls10=document.createElement("li");
    let ls11=document.createElement("li");

    ls1.addEventListener("click",sort1List1function);
    ls2.addEventListener("click",sort1List2function);
    ls3.addEventListener("click",sort1List3function);
    ls4.addEventListener("click",sort1List4function);
    ls5.addEventListener("click",sort1List5function);
    ls6.addEventListener("click",sort1List6function);
    ls7.addEventListener("click",sort1List7function);
    ls8.addEventListener("click",sort1List8function);
    ls9.addEventListener("click",sort1List9function);
    ls10.addEventListener("click",sort1List10function);
    ls11.addEventListener("click",sort1List11function);



    list1.append(h3,ls1,ls2,ls3,ls4,ls5,ls6,ls7,ls8,ls9,ls10,ls11);
    div1.append(list1);
    h3.innerText="SHOP BY PRODUCT";
    ls1.innerText="View all";
    ls2.innerText="New in";
    ls3.innerText="Boots";
    ls4.innerText="Last chance to buy";
    ls5.innerText="Loadfers";
    ls6.innerText="Sandals";
    ls7.innerText="Shoes";
    ls8.innerText="Sliders & Flip flops";
    ls9.innerText="Slippers";
    ls10.innerText="Socks";
    ls11.innerText="Trainers";

    let list2=document.createElement("ul");
    let h33=document.createElement("h3");
    let lss1=document.createElement("li");
    let lss2=document.createElement("li");
    let lss3=document.createElement("li");
    let lss4=document.createElement("li");
    let lss5=document.createElement("li");
    let lss6=document.createElement("li");

    lss1.addEventListener("click",sort1List011function);
    lss2.addEventListener("click",sort1List12function);
    lss3.addEventListener("click",sort1List13function);
    lss4.addEventListener("click",sort1List14function);
    lss5.addEventListener("click",sort1List15function);
    lss6.addEventListener("click",sort1List16function);
    
    list2.append(h33,lss1,lss2,lss3,lss4,lss5,lss6);
    div2.append(list2);
    h33.innerText="SHOP BY BRAND";
    lss1.innerText="ASOS DESIGN";
    lss2.innerText="Adidas";
    lss3.innerText="Converse";
    lss4.innerText="Ms Martens";
    lss5.innerText="Tommy Hilfiger";
    lss6.innerText="Vans";

    let img1div=document.createElement("div");
    img1div.addEventListener("click",sort1List8function);
    let img2div=document.createElement("div");
    img2div.addEventListener("click",sort1List11function);
    let img1=document.createElement("img");
    let img2=document.createElement("img");
    let img1Text=document.createElement("p");
    let img2Text=document.createElement("p");
    let a="https://images.asos-media.com/products/polo-ralph-lauren-x-asos-exclusive-collab-sliders-with-circle-logo-in-white/201964055-1-white?$n_320w$&wid=317&fit=constrain";
    let b="https://images.asos-media.com/products/nike-running-air-zoom-pegasus-38-trainers-in-yellow/23567559-1-yellow?$n_320w$&wid=317&fit=constrain";

    img1.setAttribute("src",a);
    img2.setAttribute("src",b);
    img1Text.innerText="Sliders & Flip flops";
    img2Text.innerText="Sports Trainers";
    img1div.append(img1,img1Text);
    img2div.append(img2,img2Text);
    div3.append(img1div,img2div);
    
}
function dropDownShow2(event){
    document.querySelector("#headPart4").innerHTML="";
    document.querySelector("#headPart4").style.display="block";
    let div=document.createElement("div");
    div.setAttribute("id","hoverDropdown4");
    document.querySelector("#headPart4").append(div);

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");

    div1.setAttribute("class","twoLists");
    div2.setAttribute("class","normalList");
    div3.setAttribute("class","circleTwoImageList")
    div.append(div1,div2,div3);

    let list1=document.createElement("ul");
    let h3=document.createElement("h3");
    let ls1=document.createElement("li");
    let ls2=document.createElement("li");
    let ls3=document.createElement("li");
    let ls4=document.createElement("li");
    let ls5=document.createElement("li");
    let ls6=document.createElement("li");
    let ls7=document.createElement("li");
    let ls8=document.createElement("li");
    let ls9=document.createElement("li");
    let ls10=document.createElement("li");
    let ls11=document.createElement("li");
    let ls12=document.createElement("li");
    let ls13=document.createElement("li");
    let ls14=document.createElement("li");
    let ls15=document.createElement("li");
    let ls16=document.createElement("li");
    let ls17=document.createElement("li");
    let ls18=document.createElement("li");
    let ls19=document.createElement("li");
    let ls20=document.createElement("li");
    let ls21=document.createElement("li");
    let ls22=document.createElement("li");

    list1.append(h3,ls1,ls2,ls3,ls4,ls5,ls6,ls7,ls8,ls9,ls10,ls11,ls12,ls13,ls14,ls15,ls16,ls17,ls18,ls19,ls20,ls21,ls22);
    div1.append(list1);
    h3.innerText="SHOP BY PRODUCTS";
    ls1.innerText="SALE New lines added";
    ls2.innerText="SALE T-Shirts & Vests";
    ls3.innerText="SALE Shorts";
    ls4.innerText="SALE Swimwear";
    ls5.innerText="SALE Sunglasses";
    ls6.innerText="SALE Accessories";
    ls7.innerText="SALE Activewear";
    ls8.innerText="SALE Bags";
    ls9.innerText="SALE Gifts";
    ls10.innerText="SALE Hoodies & Sweatshirts";
    ls11.innerText="SALE Jackets & Coats";
    ls12.innerText="SALE Jeans";
    ls13.innerText="SALE Jewellery & Watches";
    ls14.innerText="SALE Jumpers & Cardigans";
    ls15.innerText="SALE Loungewear";
    ls16.innerText="SALE Polo shirts";
    ls17.innerText="SALE Shirts";
    ls18.innerText="SALE Shoes & Trainers";
    ls19.innerText="SALE Suits & Tailoring";
    ls20.innerText="SALE Tracksuits";
    ls21.innerText="SALE Trousers & Chinos";
    ls22.innerText="SALE Underwear & Socks";

    let list2=document.createElement("ul");
    let h33=document.createElement("h3");
    let lss1=document.createElement("li");
    let lss2=document.createElement("li");
    let lss3=document.createElement("li");
    let lss4=document.createElement("li");
    let lss5=document.createElement("li");
    let lss6=document.createElement("li");
    
    list2.append(h33,lss1,lss2,lss3,lss4,lss5,lss6);
    div2.append(list2);
    h33.innerText="SHOP BY EDIT";
    lss1.innerText="Deals under £15";
    lss2.innerText="Last chance to buy";
    lss3.innerText="Bestsellers";
    lss4.innerText="T-shirts & Vests under £20";
    lss5.innerText="Shoes & Trainers under £40";
    lss6.innerText="Bottoms under £20";

    let div3heading=document.createElement("h3");
    let img1div=document.createElement("div");
    let img2div=document.createElement("div");
    let img1=document.createElement("img");
    let img2=document.createElement("img");
    let img1Text=document.createElement("p");
    let img2Text=document.createElement("p");
    let a="https://images.asos-media.com/products/french-connection-plus-padded-bomber-jacket-in-navy/200874463-1-marine?$n_320w$&wid=317&fit=constrain";
    let b="https://images.asos-media.com/products/french-connection-tall-slim-fit-dinner-suit-trousers/201683163-1-black?$n_320w$&wid=317&fit=constrain";

    div3heading.innerText="SHOP SALES BY BODY FIT"
    img1.setAttribute("src",a);
    img2.setAttribute("src",b);
    img1Text.innerText="Plus Size";
    img2Text.innerText="Tall";
    img1div.append(img1,img1Text);
    img2div.append(img2,img2Text);
    div3.append(div3heading,img1div,img2div);
    
}
function dropDownShow3(){
    document.querySelector("#headPart4").innerHTML="";
    document.querySelector("#headPart4").style.display="block";
    let div=document.createElement("div");
    div.setAttribute("id","hoverDropdown4");
    document.querySelector("#headPart4").append(div);

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");

    div1.setAttribute("class","normalList");
    div2.setAttribute("class","oneImageList1");
    div3.setAttribute("class","oneImageList");
    div4.setAttribute("class","oneImageList");

    div.append(div1,div2,div3,div4);

    let list1=document.createElement("ul");
    let h3=document.createElement("h3");
    let ls1=document.createElement("li");
    let ls2=document.createElement("li");
    let ls3=document.createElement("li");
    let ls4=document.createElement("li");
    let ls5=document.createElement("li");
    let ls6=document.createElement("li");
    let ls7=document.createElement("li");
    let ls8=document.createElement("li");
    let ls9=document.createElement("li");

    list1.append(h3,ls1,ls2,ls3,ls4,ls5,ls6,ls7,ls8,ls9);
    div1.append(list1);
    h3.innerText="NEW PRODUCT";
    ls1.innerText="View all";
    ls2.innerText="Clothing";
    ls3.innerText="Shoes";
    ls4.innerText="Accessories";
    ls5.innerText="Face + Body";
    ls6.innerText="Topman";
    ls7.innerText="Back in stock";
    ls8.innerText="Outlet";
    ls9.innerText="Trending Now";

    let div2head1=document.createElement("h3");
    let div2image=document.createElement("img");
    let div2ptag=document.createElement("p");
    
    div2head1.innerText="NEW EDITS";
    let a="https://images.asos-media.com/products/asos-dark-future-co-ord-oversized-t-shirt-with-logo-print-in-brown-wash/202724830-1-brownwash?$n_320w$&wid=317&fit=constrain";
    div2image.setAttribute("src",a);
    div2ptag.innerText="SUMMER JUICE"
    div2.append(div2head1,div2image,div2ptag);

    let div3image=document.createElement("img");
    let div3ptag=document.createElement("p");

    let b="https://images.asos-media.com/groups/topman-relaxed-co-ord-tie-dye-cord-cargo-shorts/84040-group-1?$n_320w$&wid=317&fit=constrain";
    div3image.setAttribute("src",b);
    div3ptag.innerText="TOP MAN";
    div3.append(div3image,div3ptag);

    let div4image=document.createElement("img");
    let div4ptag=document.createElement("p");
    div4ptag.setAttribute("id","sortException1")

    let c="https://images.asos-media.com/products/asos-design-circular-design-relaxed-linen-look-unisex-vest-in-recycled-poly-blend-in-lilac/202468420-1-pastellilac?$n_320w$&wid=317&fit=constrain";
    div4image.setAttribute("src",c);
    div4ptag.innerText="CIRCULAR DESIGN COLLECTION";
    div4.append(div4image,div4ptag);

    

}
function dropDownShow4(){
    document.querySelector("#headPart4").innerHTML="";
    document.querySelector("#headPart4").style.display="block";
    let div=document.createElement("div");
    div.setAttribute("id","hoverDropdown4");
    document.querySelector("#headPart4").append(div);

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");

    div1.setAttribute("class","twoLists");
    div2.setAttribute("class","normalList");
    div3.setAttribute("class","circleTwoImageList")
    div.append(div1,div3,div2);

    let list1=document.createElement("ul");
    let h3=document.createElement("h3");
    let ls1=document.createElement("li");
    let ls2=document.createElement("li");
    let ls3=document.createElement("li");
    let ls4=document.createElement("li");
    let ls5=document.createElement("li");
    let ls6=document.createElement("li");
    let ls7=document.createElement("li");
    let ls8=document.createElement("li");
    let ls9=document.createElement("li");
    let ls10=document.createElement("li");
    let ls11=document.createElement("li");
    let ls12=document.createElement("li");
    let ls13=document.createElement("li");
    let ls14=document.createElement("li");
    let ls15=document.createElement("li");
    let ls16=document.createElement("li");
    let ls17=document.createElement("li");
    let ls18=document.createElement("li");
    let ls19=document.createElement("li");
    let ls20=document.createElement("li");
    let ls21=document.createElement("li");
    let ls22=document.createElement("li");

    ls1.addEventListener("click", sort4List1function);
    ls2.addEventListener("click", sort4List2function);
    ls3.addEventListener("click", sort4List3function);
    ls4.addEventListener("click", sort4List4function);
    ls5.addEventListener("click", sort4List5function);
    ls6.addEventListener("click", sort4List6function);
    ls7.addEventListener("click", sort4List7function);
    ls8.addEventListener("click", sort4List8function);
    ls9.addEventListener("click", sort4List9function);
    ls10.addEventListener("click", sort4List10function);
    ls11.addEventListener("click", sort4List11function);
    ls12.addEventListener("click", sort4List12function);
    ls13.addEventListener("click", sort4List13function);
    ls14.addEventListener("click", sort4List14function);
    ls15.addEventListener("click", sort4List15function);
    ls16.addEventListener("click", sort4List16function);
    ls17.addEventListener("click", sort4List17function);
    ls18.addEventListener("click", sort4List18function);
    ls19.addEventListener("click", sort4List19function);
    ls20.addEventListener("click", sort4List20function);
    ls21.addEventListener("click", sort4List21function);

    ls1.addEventListener("click",function(){
        displayShoeMen(mensClothingData)
    });
    

    list1.append(h3,ls1,ls2,ls3,ls4,ls5,ls6,ls7,ls8,ls9,ls10,ls11,ls12,ls13,ls14,ls15,ls16,ls17,ls18,ls19,ls20,ls21,ls22);
    div1.append(list1);
    h3.innerText="SHOP BY PRODUCTS";
    ls1.innerText="View all";
    ls2.innerText="T-Shirts & Vests";
    ls3.innerText="Shirts";
    ls4.innerText="Shorts";
    ls5.innerText="Swimwear";
    ls6.innerText="Co-ords";
    ls7.innerText="Designers";
    ls8.innerText="Hoodies & Sweatshirts";
    ls9.innerText="Jackets & Coats";
    ls10.innerText="Jeans";
    ls11.innerText="Joggers";
    ls12.innerText="Jumpers & Cardigans";
    ls13.innerText="Loungewear";
    ls14.innerText="Multipacks";
    ls15.innerText="Polo shirts";
    ls16.innerText="Socks";
    ls17.innerText="Sportswear";
    ls18.innerText="Suits & Tailoring";
    ls19.innerText="Tracksuits & Joggers";
    ls20.innerText="Trousers & Chinos";
    ls21.innerText="Underwear";

    let div3heading=document.createElement("h3");
    let img1div=document.createElement("div");
    let img2div=document.createElement("div");
    let img1=document.createElement("img");
    let img2=document.createElement("img");
    let img1Text=document.createElement("p");
    let img2Text=document.createElement("p");
    let a="https://images.asos-media.com/products/french-connection-plus-padded-bomber-jacket-in-navy/200874463-1-marine?$n_320w$&wid=317&fit=constrain";
    let b="https://images.asos-media.com/products/french-connection-tall-slim-fit-dinner-suit-trousers/201683163-1-black?$n_320w$&wid=317&fit=constrain";

    div3heading.innerText="SHOP SALES BY BODY FIT"
    img1.setAttribute("src",a);
    img2.setAttribute("src",b);
    img1Text.innerText="Plus Size";
    img2Text.innerText="Tall";
    img1div.append(img1,img1Text);
    img2div.append(img2,img2Text);
    div3.append(div3heading,img1div,img2div);

    let list2=document.createElement("ul");
    let h33=document.createElement("h3");
    let lss1=document.createElement("li");
    let lss2=document.createElement("li");
    let lss3=document.createElement("li");
    let lss4=document.createElement("li");
    let lss5=document.createElement("li");
    let lss6=document.createElement("li");
    
    list2.append(h33,lss1,lss2,lss3,lss4,lss5,lss6);
    div2.append(list2);
    h33.innerText="SHOP BY EDIT";
    lss1.innerText="Wedding";
    lss2.innerText="Holiday";
    lss3.innerText="Festival";
    lss4.innerText="Spring styles";
    lss5.innerText="Last chance";
    lss6.innerText="Workwear";
}
function dropDownShow6(event){
    document.querySelector("#headPart4").innerHTML="";
    document.querySelector("#headPart4").style.display="block";
    let div=document.createElement("div");
    div.setAttribute("id","hoverDropdown4");
    document.querySelector("#headPart4").append(div);

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");

    div1.setAttribute("class","normalList");
    div2.setAttribute("class","normalList");
    div3.setAttribute("class","rectTwoImageList1");

    div.append(div1,div2,div3);

    let list1=document.createElement("ul");
    let h3=document.createElement("h3");
    let ls1=document.createElement("li");
    let ls2=document.createElement("li");
    let ls3=document.createElement("li");
    let ls4=document.createElement("li");
    let ls5=document.createElement("li");
    let ls6=document.createElement("li");
    let ls7=document.createElement("li");
    let ls8=document.createElement("li");
    let ls9=document.createElement("li");
    let ls10=document.createElement("li");
    let ls11=document.createElement("li");
    let ls12=document.createElement("li");
    let ls13=document.createElement("li");
    let ls14=document.createElement("li");

    list1.append(h3,ls1,ls2,ls3,ls4,ls5,ls6,ls7,ls8,ls9,ls10,ls11,ls12,ls13,ls14);
    div1.append(list1);
    h3.innerText="SHOP BY PRODUCT";
    ls1.innerText="View all";
    ls2.innerText="New in";
    ls3.innerText="Bags";
    ls4.innerText="Belts";
    ls5.innerText="Caps & Hats";
    ls6.innerText="Face Covering";
    ls7.innerText="Gifts";
    ls8.innerText="Gloves";
    ls9.innerText="Jewellery";
    ls10.innerText="Socks";
    ls11.innerText="Sunglasses";
    ls12.innerText="Ties";
    ls13.innerText="Wallets";
    ls14.innerText="Watches";


    let list2=document.createElement("ul");
    let h33=document.createElement("h3");
    let lss1=document.createElement("li");
    let lss2=document.createElement("li");
    let lss3=document.createElement("li");
    let lss4=document.createElement("li");
    let lss5=document.createElement("li");
    let lss6=document.createElement("li");
    
    list2.append(h33,lss1,lss2,lss3,lss4,lss5,lss6);
    div2.append(list2);
    h33.innerText="SHOP BY BRAND";
    lss1.innerText="ASOS DESIGN";
    lss2.innerText="Carhartt WIP";
    lss3.innerText="Casio";
    lss4.innerText="New Era";
    lss5.innerText="Ralph Lauren";
    lss6.innerText="The North Face";

    let img1div=document.createElement("div");
    let img2div=document.createElement("div");
    let img1=document.createElement("img");
    let img2=document.createElement("img");
    let img1Text=document.createElement("p");
    let img2Text=document.createElement("p");
    let a="https://images.asos-media.com/products/asos-design-bucket-hat-in-knitted-stripe/201522850-1-multi?$n_320w$&wid=317&fit=constrain";
    let b="https://images.asos-media.com/products/asos-design-90s-rimless-angled-sunglasses-in-silver-with-light-blue-lens/22454395-1-silver?$n_320w$&wid=317&fit=constrain";

    
    img1.setAttribute("src",a);
    img2.setAttribute("src",b);
    img1Text.innerText="CAPS";
    img2Text.innerText="SUNGLASSES";
    img1div.append(img1,img1Text);
    img2div.append(img2,img2Text);
    div3.append(img1div,img2div);
    
}
function dropDownShow8(event){
    document.querySelector("#headPart4").innerHTML="";
    document.querySelector("#headPart4").style.display="block";
    let div=document.createElement("div");
    div.setAttribute("id","hoverDropdown4");
    document.querySelector("#headPart4").append(div);

    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");

    div1.setAttribute("class","normalList");
    div2.setAttribute("class","circleFourImageList");
    div3.setAttribute("class","rectTwoImageList");
    div4.setAttribute("class","rectTwoImageList");

    div.append(div1,div2,div3,div4);

    let list1=document.createElement("ul");
    let h3=document.createElement("h3");
    let ls1=document.createElement("li");
    let ls2=document.createElement("li");
    let ls3=document.createElement("li");
    let ls4=document.createElement("li");
    let ls5=document.createElement("li");
    let ls6=document.createElement("li");

    list1.append(h3,ls1,ls2,ls3,ls4,ls5,ls6);
    div1.append(list1);

    h3.innerText="MOST WANTED";
    ls1.innerText="Blazers";
    ls2.innerText="Cardigans";
    ls3.innerText="Denim";
    ls4.innerText="Gilets";
    ls5.innerText="Overshirts";
    ls6.innerText="Oversized Suits";

    let div3heading=document.createElement("h3");
    let img1div=document.createElement("div");
    let img2div=document.createElement("div");
    let img3div=document.createElement("div");
    let img4div=document.createElement("div");
    let img1=document.createElement("img");
    let img2=document.createElement("img");
    let img3=document.createElement("img");
    let img4=document.createElement("img");
    let img1Text=document.createElement("p");
    let img2Text=document.createElement("p");
    let img3Text=document.createElement("p");
    let img4Text=document.createElement("p");
    let a="https://images.asos-media.com/products/abercrombie-fitch-3d-icon-logo-half-zip-sweatshirt-in-phantom/200442765-1-grey?$n_320w$&wid=317&fit=constrain";
    let b="https://images.asos-media.com/products/converse-run-star-hike-trainers-in-black/201219936-1-black?$n_320w$&wid=317&fit=constrain";
    let c="https://images.asos-media.com/products/deus-ex-machina-lantham-coach-jacket-in-brown/201188482-1-brown?$n_320w$&wid=317&fit=constrain";
    let d="https://images.asos-media.com/products/polo-ralph-lauren-x-asos-exclusive-collab-t-shirt-with-chest-circle-logo-and-neck-logo-in-navy/202035311-1-navy?$n_320w$&wid=317&fit=constrain";

    div3heading.innerText="SHOP SALES BY BODY FIT"
    img1.setAttribute("src",a);
    img2.setAttribute("src",b);
    img3.setAttribute("src",c);
    img4.setAttribute("src",d);
    img1Text.innerText="Abercrombie and Fitch";
    img2Text.innerText="Converse";
    img3Text.innerText="Deus";
    img4Text.innerText="Polo Ralph Lauren";
    img1div.append(img1,img1Text);
    img2div.append(img2,img2Text);
    img3div.append(img3,img3Text);
    img4div.append(img4,img4Text);
    div2.append(div3heading,img1div,img2div,img3div,img4div);

    let iimg1div=document.createElement("div");
    let iimg2div=document.createElement("div");
    let iimg1=document.createElement("img");
    let iimg2=document.createElement("img");
    let iimg1Text=document.createElement("p");
    let iimg2Text=document.createElement("p");
    let ia="https://images.asos-media.com/products/levis-bumbag-with-logo-in-blue-tie-dye/202362981-1-blue?$n_320w$&wid=317&fit=constrain";
    let ib="https://images.asos-media.com/products/asos-design-recycled-frame-round-sunglasses-in-black-with-tortoiseshell-detail/23132985-1-black?$n_320w$&wid=317&fit=constrain";

    iimg1.setAttribute("src",ia);
    iimg2.setAttribute("src",ib);
    iimg1Text.innerText="Festival";
    iimg2Text.innerText="New Sunny Shapes";
    iimg1div.append(iimg1,iimg1Text);
    iimg2div.append(iimg2,iimg2Text);
    div3.append(iimg1div,iimg2div);

    let iiimg1div=document.createElement("div");
    let iiimg2div=document.createElement("div");
    let iiimg1=document.createElement("img");
    let iiimg2=document.createElement("img");
    let iiimg1Text=document.createElement("p");
    let iiimg2Text=document.createElement("p");
    let iiia="https://images.asos-media.com/products/asos-design-recycled-frame-square-sunglasses-in-black-with-solid-black-lens/23132982-1-black?$n_320w$&wid=317&fit=constrain";
    let iiib="https://images.asos-media.com/products/asos-design-slim-chinos-with-elastic-waist-in-light-green/201500176-1-seagrass?$n_320w$&wid=317&fit=constrain";

    iiimg1.setAttribute("src",iiia);
    iiimg2.setAttribute("src",iiib);
    iiimg1Text.innerText="Spring essentials";
    iiimg2Text.innerText="Responsible edit";
    iiimg1div.append(iiimg1,iiimg1Text);
    iiimg2div.append(iiimg2,iiimg2Text);
    div4.append(iiimg1div,iiimg2div);
}
document.querySelector("#headPart4").addEventListener("mouseleave",dropDownremoverShoe2)
document.querySelector("#headPart2").addEventListener("mouseover",dropDownremoverShoe2)
function dropDownremoverShoe2(event){
    document.querySelector("#headPart4").style.display="none";
}


let container=document.querySelector("#container");
let menHomePageBlock1=document.querySelector("#top");
let menHomePageBlock2=document.querySelector("#second");
let menHomePageBlock3=document.querySelector("#third");
let menHomePageBlock4=document.querySelector("#forth");
let menHomePageBlock5=document.querySelector("#fifth");
let menHomePageBlock6=document.querySelector("#bottom");

let womenHomePageBlock1=document.querySelector("#femaleHomePageBlock1");
let womenHomePageBlock2=document.querySelector("#femaleHomePageBlock2");
let womenHomePageBlock3=document.querySelector("#femaleHomePageBlock3");
let womenHomePageBlock4=document.querySelector("#femaleHomePageBlock4");
let womenHomePageBlock5=document.querySelector("#femaleHomePageBlock5");
let womenHomePageBlock6=document.querySelector("#femaleHomePageBlock6");



// DATA
let  mensClothingData=[
    {
        "Product": "T-shirts & Vests",
        "Brand": "River Island",
        "ImageUrl": "https://images.asos-media.com/products/river-island-oversized-t-shirt-in-black/202300634-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "8.50",
        "Style": "T-shirts",
        "Color": "Black",
        "Size": "UK 4",
        "BodyFit": "Body fit"
    },
    {
        "Product": "T-shirts & Vests",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-black-organic-cotton-blend-with-chicago-city-print/22994504-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "12.50",
        "Style": "T-shirts",
        "Color": "Black",
        "Size": "UK 4",
        "BodyFit": "Tall"
    },
    {
        "Product": "T-shirts & Vests",
        "Brand": "Adidas",
        "ImageUrl": "https://images.asos-media.com/products/adidas-originals-tonal-textures-t-shirt-in-chalk-white-with-back-logo/201207151-1-white?$n_320w$&wid=317&fit=constrain",
        "Price": "33",
        "Style": "T-shirts",
        "Color": "White",
        "Size": "UK 3",
        "BodyFit": "Tall"
    },
    {
        "Product": "T-shirts & Vests",
        "Brand": "Adidas",
        "ImageUrl": "https://images.asos-media.com/products/adidas-sportswear-feel-vivid-t-shirt-in-white/202149325-1-white?$n_320w$&wid=317&fit=constrain",
        "Price": "27",
        "Style": "T-shirts",
        "Color": "White",
        "Size": "UK 4",
        "BodyFit": "Body fit"
    },
    {
        "Product": "T-shirts & Vests",
        "Brand": "Nike",
        "ImageUrl": "https://images.asos-media.com/products/nike-premium-essential-heavyweight-oversized-t-shirt-in-seafoam/201492501-1-green?$n_320w$&wid=317&fit=constrain",
        "Price": "32.95",
        "Style": "T-shirts",
        "Color": "White",
        "Size": "UK 5",
        "BodyFit": "Plus size"
    },
    {
        "Product": "Hoodies & Sweatshirts",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/nike-premium-essential-heavyweight-oversized-t-shirt-in-seafoam/201492501-1-green?$n_320w$&wid=317&fit=constrain",
        "Price": "32.95",
        "Style": "Sweatshirts",
        "Color": "White",
        "Size": "UK 4",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Hoodies & Sweatshirts",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-dark-future-sweatshirt-with-chest-print-logo-in-sand/200801746-1-beige?$n_320w$&wid=317&fit=constrain",
        "Price": "13",
        "Style": "Sweatshirts",
        "Color": "Grey",
        "Size": "UK 6",
        "BodyFit": "Body fit"
    },
    {
        "Product": "T-shirts & Vests",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/jack-jones-originals-oversized-vest-with-mind-body-soul-back-print-in-white/202763591-1-white?$n_320w$&wid=317&fit=constrain",
        "Price": "13",
        "Style": "Vests",
        "Color": "White",
        "Size": "UK 4",
        "BodyFit": "Body fit"
    },
    {
        "Product": "T-shirts & Vests",
        "Brand": "Jack & Jones",
        "ImageUrl": "https://images.asos-media.com/products/jack-jones-originals-oversized-tank-vest-with-logo-in-sand/202749060-1-peyote?$n_320w$&wid=317&fit=constrain",
        "Price": "13",
        "Style": "Vests",
        "Color": "White",
        "Size": "UK 4",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Shirts",
        "Brand": "River Island",
        "ImageUrl": "https://images.asos-media.com/products/river-island-textured-resort-shirt-in-black/203330456-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "30",
        "Style": "Casual",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Main Collection"
    },
    {
        "Product": "Shirts",
        "Brand": "Levi's",
        "ImageUrl": "https://images.asos-media.com/products/levis-printed-short-sleeve-shirt-in-black/202996479-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "56",
        "Style": "Musical",
        "Color": "Black",
        "Size": "UK 4",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Shirts",
        "Brand": "Levi's",
        "ImageUrl": "https://images.asos-media.com/products/levis-barstow-denim-shirt-in-black-with-pockets/201440745-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "70",
        "Style": "Casual",
        "Color": "Black",
        "Size": "UK 6",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Shirts",
        "Brand": "Dr Denim",
        "ImageUrl": "https://images.asos-media.com/products/dr-denim-frank-sage-check-shirt/202452361-1-sage?$n_320w$&wid=317&fit=constrain",
        "Price": "58",
        "Style": "Casual",
        "Color": "Grey",
        "Size": "UK 4",
        "BodyFit": "Tall"
    },
    {
        "Product": "Shirts",
        "Brand": "Hollister",
        "ImageUrl": "https://images.asos-media.com/products/hollister-check-overshirt-in-navy/202210233-1-navy?$n_320w$&wid=317&fit=constrain",
        "Price": "39",
        "Style": "Regular",
        "Color": "Red",
        "Size": "UK 5",
        "BodyFit": "Tall"
    },
    {
        "Product": "Jeans",
        "Brand": "Jack & Jones",
        "ImageUrl": "https://images.asos-media.com/products/jack-jones-intelligence-liam-skinny-fit-stretch-jeans-in-blue-black/202084011-1-blueblackdenim?$n_320w$&wid=317&fit=constrain",
        "Price": "37",
        "Style": "Slim",
        "Color": "Blue",
        "Size": "UK 4",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Jeans",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-cone-mill-denim-skinny-fit-american-classic-jeans-in-washed-black-with-knee-rip/200765439-1-washedblack?$n_320w$&wid=317&fit=constrain",
        "Price": "36",
        "Style": "Skinny",
        "Color": "Black",
        "Size": "UK 3",
        "BodyFit": "Tall"
    },
    {
        "Product": "Jeans",
        "Brand": "Jack & Jones",
        "ImageUrl": "https://images.asos-media.com/products/jack-jones-intelligence-mike-relaxed-fit-jeans-in-light-blue/202078928-1-bluedenim?$n_320w$&wid=317&fit=constrain",
        "Price": "37",
        "Style": "Relaxed",
        "Color": "Blue",
        "Size": "UK 4",
        "BodyFit": "shorts"
    },
    {
        "Product": "Jeans",
        "Brand": "Calvin Klein",
        "ImageUrl": "https://images.asos-media.com/products/calvin-klein-jeans-skinny-fit-jeans-in-mid-wash/202185930-1-midblue?$n_320w$&wid=317&fit=constrain",
        "Price": "89",
        "Style": "Skinny",
        "Color": "Blue",
        "Size": "UK 6",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Jeans",
        "Brand": "Levi's",
        "ImageUrl": "https://images.asos-media.com/products/levis-512-slim-taper-lo-ball-jeans-in-blue/202291261-1-midblue?$n_320w$&wid=317&fit=constrain",
        "Price": "63",
        "Style": "Slim",
        "Color": "Blue",
        "Size": "UK 4",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Jackets & Coats",
        "Brand": "River Island",
        "ImageUrl": "https://images.asos-media.com/products/river-island-zip-through-jacket-with-print-in-dark-purple/202521301-1-purpledark?$n_320w$&wid=317&fit=constrain",
        "Price": "74",
        "Style": "Jackets",
        "Color": "Multi",
        "Size": "UK 5",
        "BodyFit": "shorts"
    },
    {
        "Product": "Jackets & Coats",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-harrington-denim-jacket-in-black/202003438-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "42",
        "Style": "Denim",
        "Color": "Black",
        "Size": "UK 6",
        "BodyFit": "shorts"
    },
    {
        "Product": "Jackets & Coats",
        "Brand": "Adidas",
        "ImageUrl": "https://images.asos-media.com/products/adidas-originals-tonal-textures-collegiate-varsity-jacket-in-grey-with-back-logo/201217425-1-grey?$n_320w$&wid=317&fit=constrain",
        "Price": "77",
        "Style": "Jackets",
        "Color": "Grey",
        "Size": "UK 4",
        "BodyFit": "Main Collection"
    },
    {
        "Product": "Jackets & Coats",
        "Brand": "Jack & Jones",
        "ImageUrl": "https://images.asos-media.com/products/jack-jones-essentials-lightweight-puffer-jacket-in-beige/202065195-1-elmwood?$n_320w$&wid=317&fit=constrain",
        "Price": "37",
        "Style": "Jackets",
        "Color": "Gold",
        "Size": "UK 4.5",
        "BodyFit": "shorts"
    },
    {
        "Product": "Jackets & Coats",
        "Brand": "Jack & Jones",
        "ImageUrl": "https://images.asos-media.com/products/jack-jones-essentials-parka-with-fleece-lined-hood-in-beige/200931956-1-elmwood?$n_320w$&wid=317&fit=constrain",
        "Price": "100",
        "Style": "Jackets",
        "Color": "Yellow",
        "Size": "UK 4",
        "BodyFit": "Tall"
    },
    {
        "Product": "Jackets & Coats",
        "Brand": "Jack & Jones",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-padded-trench-coat-with-quilted-lining-in-black/22638043-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "58",
        "Style": "Coats",
        "Color": "Black",
        "Size": "UK 3",
        "BodyFit": "Tall"
    },
    {
        "Product": "Jackets & Coats",
        "Brand": "Nike",
        "ImageUrl": "https://images.asos-media.com/products/nike-legacy-therma-fit-insulated-long-parka-coat-in-khaki/23600789-1-khaki?$n_320w$&wid=317&fit=constrain",
        "Price": "84",
        "Style": "Coats",
        "Color": "Green",
        "Size": "UK 4",
        "BodyFit": "Plus size"
    },
    {
        "Product": "Joggers",
        "Brand": "Nike",
        "ImageUrl": "https://images.asos-media.com/products/nike-training-6-1-dri-fit-tapered-joggers-in-black/201540409-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "58",
        "Style": "Joggers",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Joggers",
        "Brand": "Adidas",
        "ImageUrl": "https://images.asos-media.com/products/adidas-sportswear-essential-3-stripe-joggers-in-navy/201474872-1-navy?$n_320w$&wid=317&fit=constrain",
        "Price": "33",
        "Style": "Joggers",
        "Color": "Navy",
        "Size": "UK 4",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Joggers",
        "Brand": "Puma",
        "ImageUrl": "https://images.asos-media.com/products/puma-essentials-small-logo-slim-joggers-in-black/23817375-1-pumablack?$n_320w$&wid=317&fit=constrain",
        "Price": "28",
        "Style": "Slim",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Joggers",
        "Brand": "Hollister",
        "ImageUrl": "https://images.asos-media.com/products/hollister-utility-leg-logo-loose-joggers-in-olive-green/202213920-1-olivegreen?$n_320w$&wid=317&fit=constrain",
        "Price": "25",
        "Style": "Loose",
        "Color": "Green",
        "Size": "UK 5",
        "BodyFit": "shorts"
    },
    {
        "Product": "Joggers",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-actual-co-ord-relaxed-jogger-with-curved-cut-and-sew-detailing-in-multi/202753318-1-cream?$n_320w$&wid=317&fit=constrain",
        "Price": "30",
        "Style": "Relaxed",
        "Color": "Multi",
        "Size": "UK 4",
        "BodyFit": "Tall"
    },
    {
        "Product": "Sportswear",
        "Brand": "River Island",
        "ImageUrl": "https://images.asos-media.com/products/river-island-weekday-5-pack-of-socks-in-black/203156087-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "13",
        "Style": "Regular",
        "Color": "Black",
        "Size": "UK 6",
        "BodyFit": "Tall"
    },
    {
        "Product": "Sportswear",
        "Brand": "Nike",
        "ImageUrl": "https://images.asos-media.com/products/river-island-weekday-5-pack-of-socks-in-black/203156087-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "7.50",
        "Style": "Trainer socks",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Main Collection"
    },
    {
        "Product": "Sportswear",
        "Brand": "Adidas",
        "ImageUrl": "https://images.asos-media.com/products/adidas-training-3-pack-trainer-socks-in-multi/21904904-1-multi?$n_320w$&wid=317&fit=constrain",
        "Price": "10.50",
        "Style": "Trainer socks",
        "Color": "Multi",
        "Size": "UK 6",
        "BodyFit": "Main Collection"
    },
    {
        "Product": "Sportswear",
        "Brand": "Jack & Jones",
        "ImageUrl": "https://images.asos-media.com/products/jack-jones-5-pack-tennis-socks-with-print-in-white/202674914-1-white?$n_320w$&wid=317&fit=constrain",
        "Price": "13",
        "Style": "Trainer socks",
        "Color": "White",
        "Size": "UK 4.5",
        "BodyFit": "Main Collection"
    },
    {
        "Product": "Sportswear",
        "Brand": "Adidas",
        "ImageUrl": "https://images.asos-media.com/products/adidas-originals-happy-earth-large-back-print-earth-trefoil-logo-t-shirt-in-off-white/202098107-1-offwhite?$n_320w$&wid=317&fit=constrain",
        "Price": "30",
        "Style": "Football Shirts",
        "Color": "White",
        "Size": "UK 5",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Sportswear",
        "Brand": "Timberland",
        "ImageUrl": "https://images.asos-media.com/products/timberland-utility-back-print-t-shirt-navy/201717868-1-navy?$n_320w$&wid=317&fit=constrain",
        "Price": "40",
        "Style": "Football Shirts",
        "Color": "Blue",
        "Size": "UK 4",
        "BodyFit": "Tall"
    },
    {
        "Product": "Sportswear",
        "Brand": "Nike",
        "ImageUrl": "https://images.asos-media.com/products/nike-authorized-personnel-printed-heavyweight-oversized-t-shirt-in-black/201480542-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "37",
        "Style": "Football Shirts",
        "Color": "Black",
        "Size": "UK 4.5",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Underwear",
        "Brand": "Calvin Klein",
        "ImageUrl": "https://images.asos-media.com/products/calvin-klein-intense-power-2-pack-cotton-trunks-with-contrast-waistband-in-black/202413416-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "39",
        "Style": "Trunks",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Underwear",
        "Brand": "Calvin Klein",
        "ImageUrl": "https://images.asos-media.com/products/calvin-klein-modern-structure-sleep-boxers-in-black-print/202413514-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "27",
        "Style": "Boxers",
        "Color": "Black",
        "Size": "UK 4",
        "BodyFit": "Main Collection"
    },
    {
        "Product": "Underwear",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-3-pack-trunks-in-black-with-asos-branded-waistband/202779018-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "13",
        "Style": "Trunks",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Underwear",
        "Brand": "Nike",
        "ImageUrl": "https://images.asos-media.com/products/nike-dri-fit-reluxe-2-pack-trunks-in-red-pink/201417366-1-redpink?$n_320w$&wid=317&fit=constrain",
        "Price": "29",
        "Style": "Trunks",
        "Color": "Red",
        "Size": "UK 6",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Underwear",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-briefs-in-wide-mesh-in-black/22100079-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "6",
        "Style": "Briefs",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Shorts",
        "Brand": "Nike",
        "ImageUrl": "https://images.asos-media.com/products/nike-basketball-nba-brooklyn-nets-swingman-icon-edition-unisex-shorts-in-black/201479376-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "60",
        "Style": "Shorts",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Shorts",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-relaxed-towelling-short-with-embroidery-detail-in-pink/202547790-1-bleachedmauve?$n_320w$&wid=317&fit=constrain",
        "Price": "24",
        "Style": "Relaxed",
        "Color": "Pink",
        "Size": "UK 4",
        "BodyFit": "shorts"
    },
    {
        "Product": "Shorts",
        "Brand": "Jack & Jones",
        "ImageUrl": "https://images.asos-media.com/products/jack-jones-denim-shorts-in-slim-fit-with-rips-in-light-blue/201858038-1-bluedenim?$n_320w$&wid=317&fit=constrain",
        "Price": "27",
        "Style": "Slim",
        "Color": "Blue",
        "Size": "UK 5",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Shorts",
        "Brand": "Reebok",
        "ImageUrl": "https://images.asos-media.com/products/reebok-small-logo-jersey-shorts-in-grey/200968340-1-grey?$n_320w$&wid=317&fit=constrain",
        "Price": "22",
        "Style": "Shorts",
        "Color": "Grey",
        "Size": "UK 4",
        "BodyFit": "Body fit"
    },
    {
        "Product": "Sportswear",
        "Brand": "Nike",
        "ImageUrl": "https://images.asos-media.com/products/nike-l91-metal-futura-logo-cap-in-black-and-gold/200850182-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "22",
        "Style": "Cap",
        "Color": "Black",
        "Size": "UK 6",
        "BodyFit": "Main Collection"
    },
    {
        "Product": "Sportswear",
        "Brand": "Puma",
        "ImageUrl": "https://images.asos-media.com/products/puma-ess-cap-in-white/201806122-1-whitebigcat?$n_320w$&wid=317&fit=constrain",
        "Price": "7",
        "Style": "Cap",
        "Color": "White",
        "Size": "UK 6",
        "BodyFit": "Main Collection"
    },
    {
        "Product": "Sportswear",
        "Brand": "Adidas",
        "ImageUrl": "https://images.asos-media.com/products/adidas-originals-adicolor-trefoil-bucket-hat-in-white/201362020-1-white?$n_320w$&wid=317&fit=constrain",
        "Price": "23",
        "Style": "Hats",
        "Color": "White",
        "Size": "UK 6",
        "BodyFit": "Main Collection"
    },
    {
        "Product": "Sportswear",
        "Brand": "Adidas",
        "ImageUrl": "https://images.asos-media.com/products/nike-golf-dura-feel-x-regular-left-hand-glove-in-white/201364898-1-white?$n_320w$&wid=317&fit=constrain",
        "Price": "13",
        "Style": "Gloves",
        "Color": "White",
        "Size": "UK 5",
        "BodyFit": "Main Collection"
    }
]
localStorage.setItem("asosMensClothingDataLs",JSON.stringify(mensClothingData));
let womensClothingData=[
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-embroidered-button-through-maxi-dress-in-black/201675330-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": "ASOS DESIGN Curve embroidered button through maxi dress in black",
        "Price": "68",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "S",
        "Style": "Maxi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-tulle-fallen-shoulder-maxi-dress-in-black/13215296-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve tulle fallen shoulder maxi dress in black",
        "Price": "19",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "S",
        "Style": "Maxi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-embroidered-button-through-maxi-dress-in-black/201675330-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": "ASOS DESIGN Curve embroidered button through maxi dress in black",
        "Price": "10",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "UK 10",
        "Style": "Maxi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-scallop-edge-midi-sundress-in-black/202079746-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve scallop edge midi sundress in black",
        "Price": "26",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "S",
        "Style": "Maxi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-scallop-edge-midi-sundress-in-black/202079746-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve scallop edge midi sundress in black",
        "Price": "30",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "L",
        "Style": "Maxi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-scallop-edge-midi-sundress-in-black/202079746-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve scallop edge midi sundress in black",
        "Price": "16",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "UK 6",
        "Style": "Maxi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-scallop-edge-midi-sundress-in-black/202079746-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve scallop edge midi sundress in black",
        "Price": "45",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "XL",
        "Style": "Maxi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-scallop-edge-midi-sundress-in-black/202079746-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve scallop edge midi sundress in black",
        "Price": "12",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "UK 8",
        "Style": "Maxi"
    },
    {
        "ImageUrl": " https://images.asos-media.com/products/asos-design-curve-floral-embroidered-batwing-midi-dress-in-black/201348334-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve floral embroidered batwing midi dress in black",
        "Price": "70",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "M",
        "Style": "Maxi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-exclusive-plunge-pleated-midi-dress-with-lace-insert-hem-in-black/200960582-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve Exclusive plunge pleated midi dress with lace insert hem in black",
        "Price": "50",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "L",
        "Style": "Maxi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-bardot-corset-detail-ruched-midi-dress-in-black/201495713-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve bardot corset detail ruched midi dress in black",
        "Price": "22",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "UK 8",
        "Style": "Maxi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-bardot-corset-detail-ruched-midi-dress-in-black/201495713-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve bardot corset detail ruched midi dress in black",
        "Price": "36",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "UK 8",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-nipped-in-waist-mini-dress-in-black/201843892-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve nipped in waist mini dress in black",
        "Price": "28",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "UK 8",
        "Style": "Mini"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-tie-front-lettuce-edge-90s-mini-tea-dress-in-black/202081194-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve tie front lettuce edge 90's mini tea dress in black",
        "Price": "40",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "UK 8",
        "Style": "Mini"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-shirred-bustier-mini-dress-with-puff-sleeve-in-seersucker-in-black/201746999-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": "  ASOS DESIGN Curve shirred bustier mini dress with puff sleeve in seersucker in black",
        "Price": "36",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "UK 8",
        "Style": "Mini"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-recycled-gathered-detail-mini-beach-dress-in-black/22018179-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve recycled gathered detail mini beach dress in black",
        "Price": "33",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "M",
        "Style": "Mini"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-mini-dress-with-satin-trim-ruffle-and-tie-detail-in-blue/23588935-1-softblue?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve mini dress with satin trim ruffle and tie detail in blue",
        "Price": "19",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Blue",
        "Size": "UK 2",
        "Style": "Mini"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-mini-dress-with-cut-out-detail-in-green/201221641-1-green?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve mini dress with cut out detail in green",
        "Price": "22",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Green",
        "Size": "XL L32",
        "Style": "Mini"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-linen-scoop-neck-maxi-sundress-with-a-split-in-khaki/202305841-1-khaki?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve linen scoop neck maxi sundress with a split in khaki",
        "Price": "30",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "UK 8",
        "Style": "Maxi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-bridesmaid-short-sleeved-cowl-front-maxi-dress-with-button-back-detail/201074966-1-olive?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve Bridesmaid short sleeved cowl front maxi dress with button back detail",
        "Price": "68",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "UK 8",
        "Style": "Maxi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-pleated-cami-midi-dress-with-drawstring-waist-in-soft-green/201676010-1-softgreen?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve pleated cami midi dress with drawstring waist in soft green",
        "Price": "34",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Blue",
        "Size": "UK 6",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-nipped-in-waist-linen-mini-dress-in-khaki/202081214-1-khaki?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve nipped in waist linen mini dress in khaki",
        "Price": "34",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Blue",
        "Size": "M",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-scallop-edge-cut-out-back-midi-sundress-in-animal/202305457-1-animalprint?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve scallop edge cut out back midi sundress in animal",
        "Price": "32",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "UK 6",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-scallop-edge-cut-out-back-midi-sundress-in-patchwork-floral/202305477-1-patchworkfloral?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve scallop edge cut out back midi sundress in patchwork floral",
        "Price": "30",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "XL",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-cowl-neck-ruched-side-midi-dress-in-black-floral-print/202251809-1-blackfloralprint?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve cowl neck ruched side midi dress in black floral print",
        "Price": "34",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "UK 2",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-long-sleeve-shirred-midi-dress-in-animal-print/200849935-1-animalprint?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve long sleeve shirred midi dress in animal print",
        "Price": "17",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "XL L32",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-long-sleeve-tiered-smock-midi-dress-in-brown-spot/201067978-1-brownspot?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve long sleeve tiered smock midi dress in brown spot",
        "Price": "25",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "XL L32",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-square-ruched-neck-midi-dress-in-rust-and-white-spot/202343649-1-rustandwhitespot?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve square ruched neck midi dress in rust and white spot",
        "Price": "26",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "XL",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-maxi-dress-in-bright-floral-and-heart-print/202458208-1-brightfloralprint?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve maxi dress in bright floral and heart print",
        "Price": "45",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "UK 8",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-pleated-batwing-midi-dress-in-natural-animal-print/200985338-1-naturalanimal?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve pleated batwing midi dress in natural animal print",
        "Price": "58",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "XL",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-ruched-front-pleated-midi-dress-with-shirred-waist-in-in-black-floral-print/200614208-1-floralprint?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve ruched front pleated midi dress with shirred waist in in black floral print",
        "Price": "48",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "XL",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-exclusive-pleated-midi-dress-with-kimono-sleeve-and-tie-waist-in-floral-print/201319824-1-floralprint?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve exclusive pleated midi dress with kimono sleeve and tie waist in floral print",
        "Price": "50",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "UK 10",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-midi-column-dress-in-blurred-swirl-print/201049084-1-multi?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve midi column dress in blurred swirl print",
        "Price": "17",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "UK 10",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-chain-halter-midi-dress-in-black-and-gold-floral-print/201648375-1-multi?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve chain halter midi dress in black and gold floral print",
        "Price": "15",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "L",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-long-sleeve-midi-dress-with-keyhole-and-high-neck-in-body-map-print/201669340-1-bodymapprint?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve long sleeve midi dress with keyhole and high neck in body map print",
        "Price": "24",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "UK 8",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-column-midi-dress-with-tie-front-in-tattoo/201626601-1-tattooprint?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve column midi dress with tie front in tattoo",
        "Price": "36",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "L",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-plunge-neck-kimono-sleeve-dress-in-sage-green/24478213-1-sagegreen?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve plunge neck kimono sleeve dress in sage green",
        "Price": "18",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "UK 10",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-fallen-shoulder-ruched-skater-scube-crepe-midi-dress/201132820-1-multi?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve fallen shoulder ruched skater scube crepe midi dress",
        "Price": "28",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "UK 10",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-bodycon-midi-dress-in-green-tiger-print/201222158-1-greenzebra?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve bodycon midi dress in green tiger print",
        "Price": "30",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "S",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-long-sleeve-dress-with-ruching-in-printed-mesh/201029997-1-multi?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve long sleeve dress with ruching in printed mesh",
        "Price": "22",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Multi",
        "Size": "L",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-edit-power-rib-midaxi-column-dress-in-black/201668640-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve Edit power rib midaxi column dress in black",
        "Price": "40",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "M",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-knitted-midi-dress-with-off-shoulder-in-black/200266018-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve knitted midi dress with off shoulder in black",
        "Price": "40",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "UK 10",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-lace-midi-dress-in-black/201049527-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve lace midi dress in black",
        "Price": "42",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "L",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-ladder-detail-beach-midi-dress-in-black/202035888-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve ladder detail beach midi dress in black",
        "Price": "26",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "UK 6",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-mesh-ruched-midi-dress-with-puff-sleeve-in-black/201395882-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve mesh ruched midi dress with puff sleeve in black",
        "Price": "48",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "L",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-mesh-midi-dress-with-bare-shoulder-and-contour-exposed-seams-in-black/200321950-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve mesh midi dress with bare shoulder and contour exposed seams in black",
        "Price": "18",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "L",
        "Style": "Midi"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-embellished-buttons-off-shoulder-tux-mini-dress-in-black/14938860-1-black?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve embellished buttons off shoulder tux mini dress in black",
        "Price": "19",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Black",
        "Size": "S",
        "Style": "Mini"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-2-in-1-ruched-racer-neck-mini-dress-with-ponte-oversized-blazer-in-mocha/21813328-1-mocha?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve 2 in 1 ruched racer neck mini dress with ponte oversized blazer in mocha",
        "Price": "19",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Brown",
        "Size": "L",
        "Style": "Mini"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-tie-front-ruched-mini-dress-in-spot-jacquard/200732693-1-pink?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve tie front ruched mini dress in spot jacquard",
        "Price": "42",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Pink",
        "Size": "UK 10",
        "Style": "Mini"
    },
    {
        "ImageUrl": "https://images.asos-media.com/products/asos-design-curve-tie-front-ruched-mini-dress-in-spot-jacquard/200732693-1-pink?$n_480w$&wid=476&fit=constrain",
        "ProductName": " ASOS DESIGN Curve tie front ruched mini dress in spot jacquard",
        "Price": "42",
        "Product": "Dresses",
        "BodyFit": "Plus Size",
        "Brand": "ASOS Curve",
        "Color": "Pink",
        "Size": "XL L32",
        "Style": "Midi"
    }
]
localStorage.setItem("asosWomensClothingDataLs",JSON.stringify(womensClothingData));
let shoeProdDataArr=[
    {
        "Product": "Boots",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-chelsea-boots-in-black-faux-leather-with-zips/13774536-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "32",
        "Style": "Chelsea",
        "Color": "Black",
        "Size": "UK 7",
        "BodyFit": "Body fit",
        "Leather": "Leather"
    },
    {
        "Product": "Boots",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-chelsea-boots-in-grey-suede-with-black-sole/22676857-1-grey?$n_320w$&wid=317&fit=constrain",
        "Price": "40",
        "Style": "Chelsea",
        "Color": "Grey",
        "Size": "UK 5",
        "BodyFit": "Body fit",
        "Leather": "Leather"
    },
    {
        "Product": "Boots",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-desert-boots-in-black-suede-with-leather-detail/20105409-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "40",
        "Style": "Desert",
        "Color": "Black",
        "Size": "UK 6",
        "BodyFit": "Body fit",
        "Leather": "Leather"
    },
    {
        "Product": "Boots",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-chelsea-boot-in-tan-suede/201419249-1-tan?$n_320w$&wid=317&fit=constrain",
        "Price": "34",
        "Style": "Chelsea",
        "Color": "Brown",
        "Size": "UK 4",
        "BodyFit": "Body fit",
        "Leather": "Leather"
    },
    {
        "Product": "Loafers",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-loafers-in-brown-faux-leather-with-snake-effect/201422981-1-brown?$n_320w$&wid=317&fit=constrain",
        "Price": "34",
        "Style": "Loafer",
        "Color": "Brown",
        "Size": "UK 4",
        "BodyFit": "Body fit",
        "Leather": "Leather"
    },
    {
        "Product": "Loafers",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-loafer-in-grey-faux-snake-with-snaffle/202005245-1-grey?$n_320w$&wid=317&fit=constrain",
        "Price": "34",
        "Style": "Loafer",
        "Color": "Grey",
        "Size": "UK 5",
        "BodyFit": "Body fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Loafers",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-loafers-in-black-faux-suede-with-snaffle-detail/201815002-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "30",
        "Style": "Loafer",
        "Color": "Black",
        "Size": "UK 7",
        "BodyFit": "Wide Fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Loafers",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-driving-shoes-in-navy-suede-with-lace-detail/13643907-1-navy?$n_320w$&wid=317&fit=constrain",
        "Price": "40",
        "Style": "Loafer",
        "Color": "Navy",
        "Size": "UK 7",
        "BodyFit": "Wide Fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Shoes",
        "Brand": "Jack & Jones",
        "ImageUrl": "https://images.asos-media.com/products/jack-jones-nubuck-boat-shoes-in-blue/202353486-1-navyblazer?$n_320w$&wid=317&fit=constrain",
        "Price": "58",
        "Style": "Boat Shoes",
        "Color": "Blue",
        "Size": "UK 6",
        "BodyFit": "Body fit",
        "Leather": "Leather"
    },
    {
        "Product": "Shoes",
        "Brand": "Jack & Jones",
        "ImageUrl": "https://images.asos-media.com/products/jack-jones-leather-shoes-in-black/201859319-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "32",
        "Style": "Boat Shoes",
        "Color": "Blue",
        "Size": "UK 6",
        "BodyFit": "Body fit",
        "Leather": "Leather"
    },
    {
        "Product": "Loafers",
        "Brand": "Dr Martens",
        "ImageUrl": "https://images.asos-media.com/products/dr-martens-adrian-bex-loafers-in-black-smooth/201054008-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "149",
        "Style": "Loafer",
        "Color": "Blue",
        "Size": "UK 5",
        "BodyFit": "Body fit",
        "Leather": "Leather"
    },
    {
        "Product": "Shoes",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-monk-shoe-in-black-velvet/202004123-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "40",
        "Style": "Monk Strap",
        "Color": "Black",
        "Size": "UK 4",
        "BodyFit": "Body fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Shoes",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-oxford-brogue-shoes-in-tan-leather/22668276-1-tan?$n_320w$&wid=317&fit=constrain",
        "Price": "42",
        "Style": "Brogue",
        "Color": "Brown",
        "Size": "UK 6",
        "BodyFit": "Wide Fit",
        "Leather": "Leather"
    },
    {
        "Product": "Trainers",
        "Brand": "Diesel",
        "ImageUrl": "https://images.asos-media.com/products/diesel-athos-hi-top-trainers-in-black/202016551-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "110",
        "Style": "Lace-up",
        "Color": "Black",
        "Size": "UK 4",
        "BodyFit": "Body fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Trainers",
        "Brand": "Adidas",
        "ImageUrl": "https://images.asos-media.com/products/adidas-originals-courtic-trainers-in-white-and-red/202152301-1-white?$n_320w$&wid=317&fit=constrain",
        "Price": "85",
        "Style": "Lace-up",
        "Color": "Red",
        "Size": "UK 4",
        "BodyFit": "Body fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Trainers",
        "Brand": "Converse",
        "ImageUrl": "https://images.asos-media.com/products/converse-run-star-hike-trainers-in-black/201219936-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "95",
        "Style": "Lace-up",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Body fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Trainers",
        "Brand": "Vans",
        "ImageUrl": "https://images.asos-media.com/products/vans-classic-slip-on-graffiti-trainers-in-black-and-white/201667752-1-white?$n_320w$&wid=317&fit=constrain",
        "Price": "60",
        "Style": "Slipper Shoes",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Body fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Trainers",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-trainers-in-black/200732344-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "18",
        "Style": "Boat Shoes",
        "Color": "Black",
        "Size": "UK 4",
        "BodyFit": "Body fit",
        "Leather": "Leather"
    },
    {
        "Product": "Trainers",
        "Brand": "Vans",
        "ImageUrl": "https://images.asos-media.com/products/vans-old-skool-trainers-in-black-white/24151161-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "18",
        "Style": "Boat Shoes",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Body fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Shoes",
        "Brand": "ASOS DESIGN",
        "ImageUrl": "https://images.asos-media.com/products/asos-design-oxford-shoes-in-black-leather-with-toe-cap/23211813-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "40",
        "Style": "Oxford",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Body fit",
        "Leather": "Leather"
    },
    {
        "Product": "Trainers",
        "Brand": "Vans",
        "ImageUrl": "https://images.asos-media.com/products/vans-sk8-hi-retro-court-trainers-in-multi/24365365-1-multi?$n_320w$&wid=317&fit=constrain",
        "Price": "74",
        "Style": "Lace-up",
        "Color": "Blue",
        "Size": "UK 6",
        "BodyFit": "Body fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Trainers",
        "Brand": "Vans",
        "ImageUrl": "https://images.asos-media.com/products/vans-old-skool-graffiti-trainers-in-black-white/201667706-1-white?$n_320w$&wid=317&fit=constrain",
        "Price": "75",
        "Style": "Lace-up",
        "Color": "Black",
        "Size": "UK 6",
        "BodyFit": "Body fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Trainers",
        "Brand": "Vans",
        "ImageUrl": "https://images.asos-media.com/products/vans-slip-on-checkerboard-trainers-in-black/24147962-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "44",
        "Style": "Slipper Shoes",
        "Color": "Black",
        "Size": "UK 6",
        "BodyFit": "Body fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Trainers",
        "Brand": "Vans",
        "ImageUrl": "https://images.asos-media.com/products/vans-sk8-hi-peace-paisley-trainers-in-khaki-green/201667483-1-midgreen?$n_320w$&wid=317&fit=constrain",
        "Price": "80",
        "Style": "Plimsoll",
        "Color": "Green",
        "Size": "UK 4",
        "BodyFit": "Body fit",
        "Leather": "Non Leather"
    },
    {
        "Product": "Trainers",
        "Brand": "Adidas",
        "ImageUrl": "https://images.asos-media.com/products/adidas-originals-ozweego-celox-trainers-in-triple-black/201448439-1-black?$n_320w$&wid=317&fit=constrain",
        "Price": "90",
        "Style": "Lace-up",
        "Color": "Black",
        "Size": "UK 5",
        "BodyFit": "Body fit",
        "Leather": "Leather"
    },
    {
        "Product": "Trainers",
        "Brand": "Adidas",
        "ImageUrl": "https://images.asos-media.com/products/adidas-originals-ozelia-trainers-in-triple-beige/23535186-1-beige?$n_320w$&wid=317&fit=constrain",
        "Price": "63",
        "Style": "Oxford",
        "Color": "Gold",
        "Size": "UK 6",
        "BodyFit": "Body fit",
        "Leather": "Leather"
    }
];
localStorage.setItem("shoeProdDataLS",JSON.stringify(shoeProdDataArr));


let arr;
let interName1=localStorage.getItem("menWomenSwitchTabLS")||"";
if(interName1=="selectedWomen"){
    let a=document.querySelector("#asosWomenHeading");
    let b=document.querySelector("#asosMenHeading");
    a.style.backgroundColor="#525050";
    b.style.backgroundColor="#2d2d2d";
    arr=womensClothingData;
    
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";
}
else {
    let a=document.querySelector("#asosWomenHeading");
    let b=document.querySelector("#asosMenHeading");
    b.style.backgroundColor="#525050";
    a.style.backgroundColor="#2d2d2d";
    arr=mensClothingData;
    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}

let sortBar=document.querySelector("#sortbar");

  
function displaySortBar1(){
    sortBar.innerHTML="";
    let sel1=document.createElement("select");
    let sel2=document.createElement("select");
    let sel3=document.createElement("select");
    let sel4=document.createElement("select");
    let sel5=document.createElement("select");
    let sel6=document.createElement("select");
    let sel7=document.createElement("select");
    let sel8=document.createElement("select");

    sel1.setAttribute("id","selectSort1");
    sel2.setAttribute("id","selectSort2");
    sel3.setAttribute("id","selectSort3");
    sel4.setAttribute("id","selectSort4");
    sel5.setAttribute("id","selectSort5");
    sel6.setAttribute("id","selectSort6");
    sel7.setAttribute("id","selectSort7");
    sel8.setAttribute("id","selectSort8");

    let sel1option1=document.createElement("option");
    let sel1option2=document.createElement("option");
    let sel1option3=document.createElement("option");

    sel1option1.value="Sort by Price";
    sel1option2.value="High to Low";
    sel1option3.value="Low to High";

    sel1option1.innerText="Sort by Price";
    sel1option2.innerText="High to Low";
    sel1option3.innerText="Low to High";

    // second select
    let sel2option1=document.createElement("option");
    let sel2option2=document.createElement("option");
    let sel2option3=document.createElement("option");
    let sel2option4=document.createElement("option");
    let sel2option5=document.createElement("option");
    let sel2option6=document.createElement("option");
    let sel2option7=document.createElement("option");
    let sel2option8=document.createElement("option");
    let sel2option9=document.createElement("option");

    sel2option1.value="Product type";
    sel2option2.value="Boots";
    sel2option3.value="Loafers";
    sel2option4.value="Sandals";
    sel2option5.value="Shoes";
    sel2option6.value="Sliders & Flip Flops";
    sel2option7.value="Slippers";
    sel2option8.value="Socks";
    sel2option9.value="Trainers";

    sel2option1.innerText="Product type";
    sel2option2.innerText="Boots";
    sel2option3.innerText="Loafers";
    sel2option4.innerText="Sandals";
    sel2option5.innerText="Shoes";
    sel2option6.innerText="Sliders & Flip Flops";
    sel2option7.innerText="Slippers";
    sel2option8.innerText="Socks";
    sel2option9.innerText="Trainers";

    // third select 
    let sel3option1=document.createElement("option");
    let sel3option2=document.createElement("option");
    let sel3option3=document.createElement("option");
    let sel3option4=document.createElement("option");
    let sel3option5=document.createElement("option");
    let sel3option6=document.createElement("option");
    let sel3option7=document.createElement("option");
    let sel3option8=document.createElement("option");
    let sel3option9=document.createElement("option");
    let sel3option10=document.createElement("option");
    let sel3option11=document.createElement("option");
    let sel3option12=document.createElement("option");
    let sel3option13=document.createElement("option");
    let sel3option14=document.createElement("option");

    sel3option1.value="Brand";
    sel3option2.value="ASOS DESIGN";
    sel3option3.value="Adidas";
    sel3option4.value="Converse";
    sel3option5.value="Dr.Martens";
    sel3option6.value="Tommy Hilfiger";
    sel3option7.value="Vans";
    sel3option8.value="Abercrombie & Fitch";
    sel3option9.value="Calvin Klein";
    sel3option10.value="Crocs";
    sel3option11.value="Diesel";
    sel3option12.value="French Connection";
    sel3option13.value="Jack & Jones";
    sel3option14.value="Levi's";

    sel3option1.innerText="Brand";
    sel3option2.innerText="ASOS DESIGN";
    sel3option3.innerText="Adidas";
    sel3option4.innerText="Converse";
    sel3option5.innerText="Dr.Martens";
    sel3option6.innerText="Tommy Hilfiger";
    sel3option7.innerText="Vans";
    sel3option8.innerText="Abercrombie & Fitch";
    sel3option9.innerText="Calvin Klein";
    sel3option10.innerText="Crocs";
    sel3option11.innerText="Diesel";
    sel3option12.innerText="French Connection";
    sel3option13.innerText="Jack & Jones";
    sel3option14.innerText="Levi's";

    // fourth select 
    let sel4option1=document.createElement("option");
    let sel4option2=document.createElement("option");
    let sel4option3=document.createElement("option");
    let sel4option4=document.createElement("option");
    let sel4option5=document.createElement("option");

    sel4option1.value="Body Fit";
    sel4option2.value="Extra Wide Fit";
    sel4option3.value="Main Collection";
    sel4option4.value="Tall";
    sel4option5.value="Wide Fit";

    sel4option1.innerText="Body Fit";
    sel4option2.innerText="Extra Wide Fit";
    sel4option3.innerText="Main Collection";
    sel4option4.innerText="Tall";
    sel4option5.innerText="Wide Fit";

    // fifth select
    let sel5option1=document.createElement("option");
    let sel5option2=document.createElement("option");
    let sel5option3=document.createElement("option");

    sel5option1.value="Leather/Non Leather";
    sel5option2.value="Leather";
    sel5option3.value="Non Leather";

    sel5option1.innerText="Leather/Non Leather";
    sel5option2.innerText="Leather";
    sel5option3.innerText="Non Leather";
    
    // sixth select
    let sel6option1=document.createElement("option");
    let sel6option2=document.createElement("option");
    let sel6option3=document.createElement("option");
    let sel6option4=document.createElement("option");
    let sel6option5=document.createElement("option");
    let sel6option6=document.createElement("option");
    let sel6option7=document.createElement("option");
    let sel6option8=document.createElement("option");
    let sel6option9=document.createElement("option");
    let sel6option10=document.createElement("option");
    let sel6option11=document.createElement("option");
    let sel6option12=document.createElement("option");
    let sel6option13=document.createElement("option");
    let sel6option14=document.createElement("option");

    sel6option1.value="Color";
    sel6option2.value="Black";
    sel6option3.value="Blue";
    sel6option4.value="Brown";
    sel6option5.value="Yellow";
    sel6option6.value="Gold";
    sel6option7.value="Green";
    sel6option8.value="Grey";
    sel6option9.value="Multi";
    sel6option10.value="Navy";
    sel6option11.value="Neutral";
    sel6option12.value="Orange";
    sel6option13.value="Pink";
    sel6option14.value="Red";

    sel6option1.innerText="Color";
    sel6option2.innerText="Black";
    sel6option3.innerText="Blue";
    sel6option4.innerText="Brown";
    sel6option5.innerText="Yellow";
    sel6option6.innerText="Gold";
    sel6option7.innerText="Green";
    sel6option8.innerText="Grey";
    sel6option9.innerText="Multi";
    sel6option10.innerText="Navy";
    sel6option11.innerText="Neutral";
    sel6option12.innerText="Orange";
    sel6option13.innerText="Pink";
    sel6option14.innerText="Red";

    // seventh select
    let sel7option1=document.createElement("option");
    let sel7option2=document.createElement("option");
    let sel7option3=document.createElement("option");
    let sel7option4=document.createElement("option");
    let sel7option5=document.createElement("option");
    let sel7option6=document.createElement("option");
    let sel7option7=document.createElement("option");
    let sel7option8=document.createElement("option");
    let sel7option9=document.createElement("option");
    let sel7option10=document.createElement("option");
    let sel7option11=document.createElement("option");
    let sel7option12=document.createElement("option");
    let sel7option13=document.createElement("option");
    let sel7option14=document.createElement("option");
    let sel7option15=document.createElement("option");
    let sel7option16=document.createElement("option");
    let sel7option17=document.createElement("option");
    let sel7option18=document.createElement("option");
    let sel7option19=document.createElement("option");
    let sel7option20=document.createElement("option");
    let sel7option21=document.createElement("option");
    let sel7option22=document.createElement("option");
    let sel7option23=document.createElement("option");
    let sel7option24=document.createElement("option");
    let sel7option25=document.createElement("option");
    let sel7option26=document.createElement("option");
    let sel7option27=document.createElement("option");
    let sel7option28=document.createElement("option");
    let sel7option29=document.createElement("option");
    let sel7option30=document.createElement("option");
    let sel7option31=document.createElement("option");
    let sel7option32=document.createElement("option");
    let sel7option33=document.createElement("option");
    let sel7option34=document.createElement("option");

    sel7option1.value="Style";
    sel7option2.value="Ankle";
    sel7option3.value="Ankle Strap";
    sel7option4.value="Biker";
    sel7option5.value="Boat Shoes";
    sel7option6.value="Brogue";
    sel7option7.value="Chelsea";
    sel7option8.value="Chukka";
    sel7option9.value="Chunky";
    sel7option10.value="Derby";
    sel7option11.value="Desert";
    sel7option12.value="Driver";
    sel7option13.value="Espadrilles";
    sel7option14.value="Flat";
    sel7option15.value="Flatform";
    sel7option16.value="Gladiator";
    sel7option17.value="Heeled";
    sel7option18.value="Hiking Boots";
    sel7option19.value="Hi Top";
    sel7option20.value="Jelly";
    sel7option21.value="Knee High";
    sel7option22.value="Lace-up";
    sel7option23.value="Loafer";
    sel7option24.value="Military";
    sel7option25.value="Monk Strap";
    sel7option26.value="Mule";
    sel7option27.value="Other";
    sel7option28.value="Oxford";
    sel7option29.value="Platform";
    sel7option30.value="Plimsoll";
    sel7option31.value="Sliders";
    sel7option32.value="Slingback";
    sel7option33.value="Slipper Shoes";
    sel7option34.value="Western";

    sel7option1.innerText="Style";
    sel7option2.innerText="Ankle";
    sel7option3.innerText="Ankle Strap";
    sel7option4.innerText="Biker";
    sel7option5.innerText="Boat Shoes";
    sel7option6.innerText="Brogue";
    sel7option7.innerText="Chelsea";
    sel7option8.innerText="Chukka";
    sel7option9.innerText="Chunky";
    sel7option10.innerText="Derby";
    sel7option11.innerText="Desert";
    sel7option12.innerText="Driver";
    sel7option13.innerText="Espadrilles";
    sel7option14.innerText="Flat";
    sel7option15.innerText="Flatform";
    sel7option16.innerText="Gladiator";
    sel7option17.innerText="Heeled";
    sel7option18.innerText="Hiking Boots";
    sel7option19.innerText="Hi Top";
    sel7option20.innerText="Jelly";
    sel7option21.innerText="Knee High";
    sel7option22.innerText="Lace-up";
    sel7option23.innerText="Loafer";
    sel7option24.innerText="Military";
    sel7option25.innerText="Monk Strap";
    sel7option26.innerText="Mule";
    sel7option27.innerText="Other";
    sel7option28.innerText="Oxford";
    sel7option29.innerText="Platform";
    sel7option30.innerText="Plimsoll";
    sel7option31.innerText="Sliders";
    sel7option32.innerText="Slingback";
    sel7option33.innerText="Slipper Shoes";
    sel7option34.innerText="Western";
    
    // eigth select
    let sel8option1=document.createElement("option");
    let sel8option2=document.createElement("option");
    let sel8option3=document.createElement("option");
    let sel8option4=document.createElement("option");
    let sel8option5=document.createElement("option");
    let sel8option6=document.createElement("option");
    let sel8option7=document.createElement("option");
    let sel8option8=document.createElement("option");
    let sel8option9=document.createElement("option");
    let sel8option10=document.createElement("option");
    let sel8option11=document.createElement("option");
    let sel8option12=document.createElement("option");
    let sel8option13=document.createElement("option");
    let sel8option14=document.createElement("option");
    let sel8option15=document.createElement("option");
    let sel8option16=document.createElement("option");
    let sel8option17=document.createElement("option");
    let sel8option18=document.createElement("option");

    sel8option1.value="Size";
    sel8option2.value="UK 2.5";
    sel8option3.value="UK 3";
    sel8option4.value="UK 3.5";
    sel8option5.value="UK 4";
    sel8option6.value="UK 4.5";
    sel8option7.value="UK 5";
    sel8option8.value="UK 5.5";
    sel8option9.value="UK 6";
    sel8option10.value="UK 6 Wide Fit";
    sel8option11.value="UK 6.5";
    sel8option12.value="UK 7";
    sel8option13.value="UK 7 Wide Fit";
    sel8option14.value="UK 7.5";
    sel8option15.value="UK 7.5-8";
    sel8option16.value="UK 8";
    sel8option17.value="UK 8 Wide Fit";
    sel8option18.value="UK 8.5";

    sel8option1.innerText="Size";
    sel8option2.innerText="UK 2.5";
    sel8option3.innerText="UK 3";
    sel8option4.innerText="UK 3.5";
    sel8option5.innerText="UK 4";
    sel8option6.innerText="UK 4.5";
    sel8option7.innerText="UK 5";
    sel8option8.innerText="UK 5.5";
    sel8option9.innerText="UK 6";
    sel8option10.innerText="UK 6 Wide Fit";
    sel8option11.innerText="UK 6.5";
    sel8option12.innerText="UK 7";
    sel8option13.innerText="UK 7 Wide Fit";
    sel8option14.innerText="UK 7.5";
    sel8option15.innerText="UK 7.5-8";
    sel8option16.innerText="UK 8";
    sel8option17.innerText="UK 8 Wide Fit";
    sel8option18.innerText="UK 8.5";
    

    sel1.append(sel1option1,sel1option2,sel1option3);
    sel2.append(sel2option1,sel2option2,sel2option3,sel2option4,sel2option5,sel2option6,sel2option7,sel2option8,sel2option9);
    sel3.append(sel3option1,sel3option2,sel3option3,sel3option4,sel3option5,sel3option6,sel3option7,sel3option8,sel3option9,sel3option10,sel3option11,sel3option12,sel3option13,sel3option14)
    sel4.append(sel4option1,sel4option2,sel4option3,sel4option4,sel4option5);
    sel5.append(sel5option1,sel5option2,sel5option3);
    sel6.append(sel6option1,sel6option2,sel6option3,sel6option4,sel6option5,sel6option6,sel6option7,sel6option8,sel6option9,sel6option10,sel6option11,sel6option12,sel6option13,sel6option14)
    sel7.append(sel7option1,sel7option2,sel7option3,sel7option4,sel7option5,sel7option6,sel7option7,sel7option8,sel7option9,sel7option10,sel7option11,sel7option12,sel7option13,sel7option14,sel7option15,sel7option16,sel7option17,sel7option18,sel7option19,sel7option20,sel7option21,sel7option22,sel7option23,sel7option24,sel7option25,sel7option26,sel7option27,sel7option28,sel7option29,sel7option30,sel7option31,sel7option32,sel7option33,sel7option34)
    sel8.append(sel8option1,sel8option2,sel8option3,sel8option4,sel8option5,sel8option6,sel8option7,sel8option8,sel8option9,sel8option10,sel8option11,sel8option12,sel8option13,sel8option14,sel8option15,sel8option16,sel8option17,sel8option18)
    sortBar.append(sel1,sel2,sel3,sel4,sel5,sel6,sel7,sel8);



    sel1.addEventListener("change",function(){
        sortingFunction(liveData)
    });
    sel2.addEventListener("change",function(){
        sortingFunction(liveData)});
    sel3.addEventListener("change",function(){
        sortingFunction(liveData)});
    sel4.addEventListener("change",function(){
        sortingFunction(liveData)});
    sel5.addEventListener("change",function(){
        sortingFunction(liveData)});
    sel6.addEventListener("change",function(){
        sortingFunction(liveData)});
    sel7.addEventListener("change",function(){
        sortingFunction(liveData)});
    sel8.addEventListener("change",function(){
        sortingFunction(liveData)});
}
function displaySortBar2(){
    sortBar.innerHTML="";
    let sel1=document.createElement("select");
    let sel2=document.createElement("select");
    let sel3=document.createElement("select");
    let sel4=document.createElement("select");
    // let sel5=document.createElement("select");
    let sel6=document.createElement("select");
    let sel7=document.createElement("select");
    let sel8=document.createElement("select");

    sel1.setAttribute("id","selectSort1");
    sel2.setAttribute("id","selectSort2");
    sel3.setAttribute("id","selectSort3");
    sel4.setAttribute("id","selectSort4");
    // sel5.setAttribute("id","selectSort5");
    sel6.setAttribute("id","selectSort6");
    sel7.setAttribute("id","selectSort7");
    sel8.setAttribute("id","selectSort8");

    let sel1option1=document.createElement("option");
    let sel1option2=document.createElement("option");
    let sel1option3=document.createElement("option");

    sel1option1.value="Sort by Price";
    sel1option2.value="High to Low";
    sel1option3.value="Low to High";

    sel1option1.innerText="Sort by Price";
    sel1option2.innerText="High to Low";
    sel1option3.innerText="Low to High";

    // second select
    let sel2option1=document.createElement("option");
    let sel2option2=document.createElement("option");
    let sel2option3=document.createElement("option");
    let sel2option4=document.createElement("option");
    let sel2option5=document.createElement("option");
    let sel2option6=document.createElement("option");
    let sel2option7=document.createElement("option");
    let sel2option8=document.createElement("option");
    let sel2option9=document.createElement("option");
    let sel2option10=document.createElement("option");
    let sel2option11=document.createElement("option");



    sel2option1.value="Product type";
    sel2option2.value="T-shirts & Vests";
    sel2option3.value="Shirts";
    sel2option4.value="Shorts";
    sel2option5.value="Swimwear";
    sel2option6.value="Hoodies & Sweatshirts";
    sel2option7.value="Jackets & Coats";
    sel2option8.value="Jeans";
    sel2option9.value="Joggers";
    sel2option10.value="Sportswear";
    sel2option11.value="Underwear";

    sel2option1.innerText="Product type";
    sel2option2.innerText="T-shirts & Vests";
    sel2option3.innerText="Shirts";
    sel2option4.innerText="Shorts";
    sel2option5.innerText="Swimwear";
    sel2option6.innerText="Hoodies & Sweatshirts";
    sel2option7.innerText="Jackets & Coats";
    sel2option8.innerText="Jeans";
    sel2option9.innerText="Joggers";
    sel2option10.innerText="Sportswear";
    sel2option11.innerText="Underwear";

    // third select 
    let sel3option1=document.createElement("option");
    let sel3option2=document.createElement("option");
    let sel3option3=document.createElement("option");
    let sel3option4=document.createElement("option");
    let sel3option5=document.createElement("option");
    let sel3option6=document.createElement("option");
    let sel3option7=document.createElement("option");
    let sel3option8=document.createElement("option");
    let sel3option9=document.createElement("option");
    let sel3option10=document.createElement("option");
    let sel3option11=document.createElement("option");
    let sel3option12=document.createElement("option");
    let sel3option13=document.createElement("option");
    let sel3option14=document.createElement("option");

    sel3option1.value="Brand";
    sel3option2.value="ASOS DESIGN";
    sel3option3.value="Adidas";
    sel3option4.value="Converse";
    sel3option5.value="Dr Denim";
    sel3option6.value="Hollister";
    sel3option7.value="Nike";
    sel3option8.value="Calvin Klein";
    sel3option9.value="Puma";
    sel3option10.value="Reebok";
    sel3option11.value="Timberland";
    sel3option12.value="Jack & Jones";
    sel3option13.value="Levi's";
    sel3option14.value="River Island";

    sel3option1.innerText="Brand";
    sel3option2.innerText="ASOS DESIGN";
    sel3option3.innerText="Adidas";
    sel3option4.innerText="Converse";
    sel3option5.innerText="Dr Denim";
    sel3option6.innerText="Hollister";
    sel3option7.innerText="Nike";
    sel3option8.innerText="Calvin Klein";
    sel3option9.innerText="Puma";
    sel3option10.innerText="Reebok";
    sel3option11.innerText="Timberland";
    sel3option12.innerText="Jack & Jones";
    sel3option13.innerText="Levi's";
    sel3option14.innerText="River Island";

    // fourth select 
    let sel4option1=document.createElement("option");
    let sel4option2=document.createElement("option");
    let sel4option3=document.createElement("option");
    let sel4option4=document.createElement("option");
    let sel4option5=document.createElement("option");

    sel4option1.value="Body Fit";
    sel4option2.value="Plus size";
    sel4option3.value="Main Collection";
    sel4option4.value="Tall";
    sel4option5.value="shorts";

    sel4option1.innerText="Body Fit";
    sel4option2.innerText="Plus size";
    sel4option3.innerText="Main Collection";
    sel4option4.innerText="Tall";
    sel4option5.innerText="shorts";

    // fifth select
    // let sel5option1=document.createElement("option");
    // let sel5option2=document.createElement("option");
    // let sel5option3=document.createElement("option");

    // sel5option1.value="Leather/Non Leather";
    // sel5option2.value="Leather";
    // sel5option3.value="Non Leather";

    // sel5option1.innerText="Leather/Non Leather";
    // sel5option2.innerText="Leather";
    // sel5option3.innerText="Non Leather";
    
    // sixth select
    let sel6option1=document.createElement("option");
    let sel6option2=document.createElement("option");
    let sel6option3=document.createElement("option");
    let sel6option4=document.createElement("option");
    let sel6option5=document.createElement("option");
    let sel6option6=document.createElement("option");
    let sel6option7=document.createElement("option");
    let sel6option8=document.createElement("option");
    let sel6option9=document.createElement("option");
    let sel6option10=document.createElement("option");
    let sel6option11=document.createElement("option");
    let sel6option12=document.createElement("option");
    let sel6option13=document.createElement("option");
    let sel6option14=document.createElement("option");
    let sel6option15=document.createElement("option");

    sel6option1.value="Color";
    sel6option2.value="Black";
    sel6option3.value="Blue";
    sel6option4.value="Brown";
    sel6option5.value="Yellow";
    sel6option6.value="Gold";
    sel6option7.value="Green";
    sel6option8.value="Grey";
    sel6option9.value="Multi";
    sel6option10.value="Navy";
    sel6option11.value="Neutral";
    sel6option12.value="Orange";
    sel6option13.value="Pink";
    sel6option14.value="Red";
    sel6option15.value="White";

    sel6option1.innerText="Color";
    sel6option2.innerText="Black";
    sel6option3.innerText="Blue";
    sel6option4.innerText="Brown";
    sel6option5.innerText="Yellow";
    sel6option6.innerText="Gold";
    sel6option7.innerText="Green";
    sel6option8.innerText="Grey";
    sel6option9.innerText="Multi";
    sel6option10.innerText="Navy";
    sel6option11.innerText="Neutral";
    sel6option12.innerText="Orange";
    sel6option13.innerText="Pink";
    sel6option14.innerText="Red";
    sel6option15.innerText="White";

    // seventh select
    let sel7option1=document.createElement("option");
    let sel7option2=document.createElement("option");
    let sel7option3=document.createElement("option");
    let sel7option4=document.createElement("option");
    let sel7option5=document.createElement("option");
    let sel7option6=document.createElement("option");
    let sel7option7=document.createElement("option");
    let sel7option8=document.createElement("option");
    let sel7option9=document.createElement("option");
    let sel7option10=document.createElement("option");
    let sel7option11=document.createElement("option");
    let sel7option12=document.createElement("option");
    let sel7option13=document.createElement("option");
    let sel7option14=document.createElement("option");
    let sel7option15=document.createElement("option");
    let sel7option16=document.createElement("option");
    let sel7option17=document.createElement("option");
    let sel7option18=document.createElement("option");
    let sel7option19=document.createElement("option");
    let sel7option20=document.createElement("option");
    let sel7option21=document.createElement("option");
    let sel7option22=document.createElement("option");
    let sel7option23=document.createElement("option");
    let sel7option24=document.createElement("option");
    let sel7option25=document.createElement("option");
    let sel7option26=document.createElement("option");
    let sel7option27=document.createElement("option");
    let sel7option28=document.createElement("option");
    let sel7option29=document.createElement("option");
    let sel7option30=document.createElement("option");
    let sel7option31=document.createElement("option");
    let sel7option32=document.createElement("option");
    let sel7option33=document.createElement("option");
    let sel7option34=document.createElement("option");
    let sel7option35=document.createElement("option");

    sel7option1.value="Style";
    sel7option2.value="Hoodies";
    sel7option3.value="Joggers";
    sel7option4.value="Shorts";
    sel7option5.value="Sweatshirts";
    sel7option6.value="T-shirts";
    sel7option7.value="Vests";
    sel7option8.value="Denim";
    sel7option9.value="Granded collar";
    sel7option10.value="Musical";
    sel7option11.value="Regular";
    sel7option12.value="Relaxed";
    sel7option13.value="Casual";
    sel7option14.value="Boxers";
    sel7option15.value="Coats";
    sel7option16.value="Blazers";
    sel7option17.value="Jackets";
    sel7option18.value="Briefs";
    sel7option19.value="Trunks";
    sel7option20.value="Loose";
    sel7option21.value="Cropped";
    sel7option22.value="Skinny";
    sel7option23.value="Slim";
    sel7option24.value="Straight leg";
    sel7option25.value="Other";
    sel7option26.value="Ankle";
    sel7option27.value="Crew";
    sel7option28.value="Invisible socks";
    sel7option29.value="Sports socks";
    sel7option30.value="Trainer socks";
    sel7option31.value="Football Shirts";
    sel7option32.value="Cap";
    sel7option33.value="Hats";
    sel7option34.value="Gloves";
    sel7option35.value="Western";

    sel7option1.innerText="Style";
    sel7option2.innerText="Hoodies";
    sel7option3.innerText="Joggers";
    sel7option4.innerText="Shorts";
    sel7option5.innerText="Sweatshirts";
    sel7option6.innerText="T-shirts";
    sel7option7.innerText="Vests";
    sel7option8.innerText="Denim";
    sel7option9.innerText="Granded collar";
    sel7option10.innerText="Musical";
    sel7option11.innerText="Regular";
    sel7option12.innerText="Relaxed";
    sel7option13.innerText="Casual";
    sel7option14.innerText="Boxers";
    sel7option15.innerText="Coats";
    sel7option16.innerText="Blazers";
    sel7option17.innerText="Jackets";
    sel7option18.innerText="Briefs";
    sel7option19.innerText="Trunks";
    sel7option20.innerText="Loose";
    sel7option21.innerText="Cropped";
    sel7option22.innerText="Skinny";
    sel7option23.innerText="Slim";
    sel7option24.innerText="Straight leg";
    sel7option25.innerText="Other";
    sel7option26.innerText="Ankle";
    sel7option27.innerText="Crew";
    sel7option28.innerText="Invisible socks";
    sel7option29.innerText="Sports socks";
    sel7option30.innerText="Trainer socks";
    sel7option31.innerText="Football Shirts";
    sel7option32.innerText="Cap";
    sel7option33.innerText="Hats";
    sel7option34.innerText="Gloves";
    sel7option35.innerText="Western";
    
    // eigth select
    let sel8option1=document.createElement("option");
    let sel8option2=document.createElement("option");
    let sel8option3=document.createElement("option");
    let sel8option4=document.createElement("option");
    let sel8option5=document.createElement("option");
    let sel8option6=document.createElement("option");
    let sel8option7=document.createElement("option");
    let sel8option8=document.createElement("option");
    let sel8option9=document.createElement("option");
    let sel8option10=document.createElement("option");
    let sel8option11=document.createElement("option");
    let sel8option12=document.createElement("option");
    let sel8option13=document.createElement("option");
    let sel8option14=document.createElement("option");
    let sel8option15=document.createElement("option");
    let sel8option16=document.createElement("option");
    let sel8option17=document.createElement("option");
    let sel8option18=document.createElement("option");

    sel8option1.value="Size";
    sel8option2.value="UK 2.5";
    sel8option3.value="UK 3";
    sel8option4.value="UK 3.5";
    sel8option5.value="UK 4";
    sel8option6.value="UK 4.5";
    sel8option7.value="UK 5";
    sel8option8.value="UK 5.5";
    sel8option9.value="UK 6";
    sel8option10.value="UK 6 Wide Fit";
    sel8option11.value="UK 6.5";
    sel8option12.value="UK 7";
    sel8option13.value="UK 7 Wide Fit";
    sel8option14.value="UK 7.5";
    sel8option15.value="UK 7.5-8";
    sel8option16.value="UK 8";
    sel8option17.value="UK 8 Wide Fit";
    sel8option18.value="UK 8.5";

    sel8option1.innerText="Size";
    sel8option2.innerText="UK 2.5";
    sel8option3.innerText="UK 3";
    sel8option4.innerText="UK 3.5";
    sel8option5.innerText="UK 4";
    sel8option6.innerText="UK 4.5";
    sel8option7.innerText="UK 5";
    sel8option8.innerText="UK 5.5";
    sel8option9.innerText="UK 6";
    sel8option10.innerText="UK 6 Wide Fit";
    sel8option11.innerText="UK 6.5";
    sel8option12.innerText="UK 7";
    sel8option13.innerText="UK 7 Wide Fit";
    sel8option14.innerText="UK 7.5";
    sel8option15.innerText="UK 7.5-8";
    sel8option16.innerText="UK 8";
    sel8option17.innerText="UK 8 Wide Fit";
    sel8option18.innerText="UK 8.5";
    

    sel1.append(sel1option1,sel1option2,sel1option3);
    sel2.append(sel2option1,sel2option2,sel2option3,sel2option4,sel2option5,sel2option6,sel2option7,sel2option8,sel2option9,sel2option10,sel2option11);
    sel3.append(sel3option1,sel3option2,sel3option3,sel3option4,sel3option5,sel3option6,sel3option7,sel3option8,sel3option9,sel3option10,sel3option11,sel3option12,sel3option13,sel3option14)
    sel4.append(sel4option1,sel4option2,sel4option3,sel4option4,sel4option5);
    // sel5.append(sel5option1,sel5option2,sel5option3);
    sel6.append(sel6option1,sel6option2,sel6option3,sel6option4,sel6option5,sel6option6,sel6option7,sel6option8,sel6option9,sel6option10,sel6option11,sel6option12,sel6option13,sel6option14,sel6option15)
    sel7.append(sel7option1,sel7option2,sel7option3,sel7option4,sel7option5,sel7option6,sel7option7,sel7option8,sel7option9,sel7option10,sel7option11,sel7option12,sel7option13,sel7option14,sel7option15,sel7option16,sel7option17,sel7option18,sel7option19,sel7option20,sel7option21,sel7option22,sel7option23,sel7option24,sel7option25,sel7option26,sel7option27,sel7option28,sel7option29,sel7option30,sel7option31,sel7option32,sel7option33,sel7option34,sel7option35)
    sel8.append(sel8option1,sel8option2,sel8option3,sel8option4,sel8option5,sel8option6,sel8option7,sel8option8,sel8option9,sel8option10,sel8option11,sel8option12,sel8option13,sel8option14,sel8option15,sel8option16,sel8option17,sel8option18)
    sortBar.append(sel1,sel2,sel3,sel4,sel6,sel7,sel8);



    sel1.addEventListener("change",function(){
        sortingFunction(liveData)
    });
    sel2.addEventListener("change",function(){
        sortingFunction1(liveData)});
    sel3.addEventListener("change",function(){
        sortingFunction1(liveData)});
    sel4.addEventListener("change",function(){
        sortingFunction1(liveData)});
    sel6.addEventListener("change",function(){
        sortingFunction1(liveData)});
    sel7.addEventListener("change",function(){
        sortingFunction1(liveData)});
    sel8.addEventListener("change",function(){
        sortingFunction1(liveData)});
}


function sortingFunction(arr11){
    console.log(arr11);
    // id=selectSort1,selectSort2,selectSort3,selectSort4....
    let arr1=[];
    let arr2=[];
    let a=document.querySelector("#selectSort1").value;
    let b=document.querySelector("#selectSort2").value;
    let c=document.querySelector("#selectSort3").value;
    let d=document.querySelector("#selectSort4").value;
    let e=document.querySelector("#selectSort5").value;
    let f=document.querySelector("#selectSort6").value;
    let g=document.querySelector("#selectSort7").value;
    let h=document.querySelector("#selectSort8").value;
    
    // condition2
    if(b!="Product type"){
            arr11.forEach(function(ele){
                if(ele.Product==b) arr1.push(ele);
            })
    }
    else {
        arr1=arr11;
    }
    // condition3
    arr2=arr1;
    arr1=[];
    if(c!="Brand" && arr2.length!=0){
            arr2.forEach(function(ele){
                if(ele.Brand==c) arr1.push(ele);
            })
    }
    else {
        arr1=arr2;
    }
    // condition4
    arr2=arr1;
    arr1=[];
    if(d!="Body Fit" && arr2.length!=0){
            arr2.forEach(function(ele){
                if(ele.BodyFit==d) arr1.push(ele);
            })
    }
    else {
        arr1=arr2;
    }
    // conditon5
    arr2=arr1;
    arr1=[];
    if(e!="Leather/Non Leather" && arr2.length!=0){
            arr2.forEach(function(ele){
                if(ele.Leather==e) arr1.push(ele);
            })
    }
    else {
        arr1=arr2;
    }
    // condition6
    arr2=arr1;
    arr1=[];
    if(f!="Color" && arr2.length!=0){
            arr2.forEach(function(ele){
                if(ele.Color==f) arr1.push(ele);
            })
    }
    else {
        arr1=arr2;
    }
    // condition7
    arr2=arr1;
    arr1=[];
    if(g!="Style" && arr2.length!=0){
            arr2.forEach(function(ele){
                if(ele.Style==g) arr1.push(ele);
            })
    }
    else {
        arr1=arr2;
    }
    // condition8
    arr2=arr1;
    arr1=[];
    if(h!="Size" && arr2.length!=0){
            arr2.forEach(function(ele){
                if(ele.Size==h) arr1.push(ele);
            })
    }
    else {
        arr1=arr2;
    }
    displayShoeMen(arr1);
}
function sortingFunction1(arr11){
    console.log(arr11);
    // id=selectSort1,selectSort2,selectSort3,selectSort4....
    let arr1=[];
    let arr2=[];
    let a=document.querySelector("#selectSort1").value;
    let b=document.querySelector("#selectSort2").value;
    let c=document.querySelector("#selectSort3").value;
    let d=document.querySelector("#selectSort4").value;
    let f=document.querySelector("#selectSort6").value;
    let g=document.querySelector("#selectSort7").value;
    let h=document.querySelector("#selectSort8").value;
    
    // condition2
    if(b!="Product type"){
            arr11.forEach(function(ele){
                if(ele.Product==b) arr1.push(ele);
            })
    }
    else {
        arr1=arr11;
    }
    // condition3
    arr2=arr1;
    arr1=[];
    if(c!="Brand" && arr2.length!=0){
            arr2.forEach(function(ele){
                if(ele.Brand==c) arr1.push(ele);
            })
    }
    else {
        arr1=arr2;
    }
    // condition4
    arr2=arr1;
    arr1=[];
    if(d!="Body Fit" && arr2.length!=0){
            arr2.forEach(function(ele){
                if(ele.BodyFit==d) arr1.push(ele);
            })
    }
    else {
        arr1=arr2;
    }
    // condition6
    arr2=arr1;
    arr1=[];
    if(f!="Color" && arr2.length!=0){
            arr2.forEach(function(ele){
                if(ele.Color==f) arr1.push(ele);
            })
    }
    else {
        arr1=arr2;
    }
    // condition7
    arr2=arr1;
    arr1=[];
    if(g!="Style" && arr2.length!=0){
            arr2.forEach(function(ele){
                if(ele.Style==g) arr1.push(ele);
            })
    }
    else {
        arr1=arr2;
    }
    // condition8
    arr2=arr1;
    arr1=[];
    if(h!="Size" && arr2.length!=0){
            arr2.forEach(function(ele){
                if(ele.Size==h) arr1.push(ele);
            })
    }
    else {
        arr1=arr2;
    }
    displayShoeMen3(arr1);
}








// displayShoeMen(arr);


function displayShoeMen(arr){
    document.querySelector("#container").innerHTML="";
    arr.forEach(function(ele){
        let blk=document.createElement("div");
        let blkImg=document.createElement("img");
        let blkName=document.createElement("p");
        let blkPrice=document.createElement("h2");

        blkImg.setAttribute("src",ele.ImageUrl);
        blkName.innerText=ele.Brand+" "+ele.Product+" "+ele.Style+" "+ele.Leather+" in "+ele.Color;
        blkPrice.innerText="£ "+ele.Price;

        blk.append(blkImg, blkName, blkPrice);
        container.append(blk);

        blk.addEventListener("click",function(){
            takeUserToProductFun(arr,arr.indexOf(ele))
        })
    })
}
function displayShoeMen1(arr){
    document.querySelector("#container").innerHTML="";
    arr.forEach(function(ele){
        let blk=document.createElement("div");
        let blkImg=document.createElement("img");
        let blkName=document.createElement("p");
        let blkPrice=document.createElement("h2");

        blkImg.setAttribute("src",ele.ImageUrl);
        blkName.innerText=ele.ProductName;
        blkPrice.innerText="£ "+ele.Price;

        blk.append(blkImg, blkName, blkPrice);
        container.append(blk);
        blk.addEventListener("click",function(){
            takeUserToProductFun(arr,arr.indexOf(ele))
        })
    })
}
function displayShoeMen3(arr){
    document.querySelector("#container").innerHTML="";
    arr.forEach(function(ele){
        let blk=document.createElement("div");
        let blkImg=document.createElement("img");
        let blkName=document.createElement("p");
        let blkPrice=document.createElement("h2");

        blkImg.setAttribute("src",ele.ImageUrl);
        blkName.innerText=ele.Brand+" "+ele.Product+" "+ele.Style+" in "+ele.Color;
        blkPrice.innerText="£ "+ele.Price;

        blk.append(blkImg, blkName, blkPrice);
        container.append(blk);

        blk.addEventListener("click",function(){
            takeUserToProductFun(arr,arr.indexOf(ele))
        })
    })
}


function sort1List1function(){
    displaySortBar1();
    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    displayShoeMen(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List2function(){
    displaySortBar1();
    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    displayShoeMen(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";
    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List3function(){
    displaySortBar1();
    document.querySelector("#selectSort2").value="Boots";

    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";
    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";
    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List4function(){
    displaySortBar1();
    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    displayShoeMen(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List5function(){
    displaySortBar1();

    document.querySelector("#selectSort2").value="Loafers";

    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";
    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List6function(){
    displaySortBar1();

    document.querySelector("#selectSort2").value="Sandals";

    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData);

    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List7function(){
    displaySortBar1();
    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    displayShoeMen(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List8function(){
    displaySortBar1();

    document.querySelector("#selectSort2").value="Sliders & Flip Flops";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List9function(){
    displaySortBar1();

    document.querySelector("#selectSort2").value="Slippers";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List10function(){
    displaySortBar1();

    document.querySelector("#selectSort2").value="Socks";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List11function(){
    displaySortBar1();
    document.querySelector("#selectSort2").value="Trainers";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}


function sort1List011function(){
    displaySortBar1();
    document.querySelector("#selectSort3").value="ASOS DESIGN";
    
    document.querySelector("#selectSort2").value="Product type";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List12function(){
    displaySortBar1();

    document.querySelector("#selectSort3").value="Adidas";
    
    document.querySelector("#selectSort2").value="Product type";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List13function(){
    displaySortBar1();

    document.querySelector("#selectSort3").value="Converse";
    
    document.querySelector("#selectSort2").value="Product type";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List14function(){
    displaySortBar1();
    document.querySelector("#selectSort3").value="Ms Martens";
    
    document.querySelector("#selectSort2").value="Product type";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData); 
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none"; 

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List15function(){
    displaySortBar1();
    document.querySelector("#selectSort3").value="Tommy Hilfiger";
    
    document.querySelector("#selectSort2").value="Product type";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort1List16function(){
    displaySortBar1();
    document.querySelector("#selectSort3").value="Vans";
    
    document.querySelector("#selectSort2").value="Product type";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort5").value="Leather/Non Leather";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("shoeProdDataLS"));
    sortingFunction(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}



function sort4List1function(){
    displaySortBar2(); 
    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    
    document.querySelector("#selectSort2").value="Product type";
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";
    
    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List2function(){
    displaySortBar2(); 
    document.querySelector("#selectSort2").value="T-shirts & Vests";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List3function(){
    displaySortBar2(); 
    document.querySelector("#selectSort2").value="Shirts";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List4function(){
    displaySortBar2(); 
    document.querySelector("#selectSort2").value="Shorts";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List5function(){
    displaySortBar2(); 
    document.querySelector("#selectSort2").value="Swimwear";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);

    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List6function(){
    displaySortBar2(); 
    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List7function(){
    displaySortBar2();

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List8function(){
    displaySortBar2(); 
    document.querySelector("#selectSort2").value="Hoodies & Sweatshirts";

    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List9function(){
    displaySortBar2(); 
    document.querySelector("#selectSort2").value="Jackets & Coats";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List10function(){
    displaySortBar2(); 
    document.querySelector("#selectSort2").value="Jeans";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List11function(){
    displaySortBar2(); 
    document.querySelector("#selectSort2").value="Joggers";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";
}
function sort4List12function(){
    displaySortBar2();

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";
}
function sort4List13function(){
    displaySortBar2(); 
    document.querySelector("#selectSort2").value="Underwear";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List14function(){
    displaySortBar2();

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List15function(){
    displaySortBar2(); 
    document.querySelector("#selectSort2").value="Underwear";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List16function(){
    displaySortBar2(); 
    document.querySelector("#selectSort7").value="Trainer socks";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort2").value="Product type";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);  
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none"; 
    
    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List17function(){
    displaySortBar2();

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);

    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none"; 

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List18function(){
    displaySortBar2();

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List19function(){
    displaySortBar2(); 
    document.querySelector("#selectSort2").value="Joggers";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List20function(){
    displaySortBar2();

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}
function sort4List21function(){
    displaySortBar2(); 
    document.querySelector("#selectSort2").value="Underwear";
    
    document.querySelector("#selectSort3").value="Brand";
    document.querySelector("#selectSort4").value="Body Fit";
    document.querySelector("#selectSort6").value="Color";
    document.querySelector("#selectSort7").value="Style";
    document.querySelector("#selectSort8").value="Size";

    liveData=JSON.parse(localStorage.getItem("asosMensClothingDataLs"));
    sortingFunction1(liveData);
    menHomePageBlock1.style.display="none";
    menHomePageBlock2.style.display="none";
    menHomePageBlock3.style.display="none";
    menHomePageBlock4.style.display="none";
    menHomePageBlock5.style.display="none";
    menHomePageBlock6.style.display="none";

    womenHomePageBlock1.style.display="none";
    womenHomePageBlock2.style.display="none";
    womenHomePageBlock3.style.display="none";
    womenHomePageBlock4.style.display="none";
    womenHomePageBlock5.style.display="none";
    womenHomePageBlock6.style.display="none";
}



document.querySelector("#asosWomenHeading").addEventListener("click",menWomenSwapFun);
document.querySelector("#asosMenHeading").addEventListener("click",womenMenSwapFun);


function menWomenSwapFun(){
    container.innerHTML="";
    let a=document.querySelector("#asosWomenHeading");
    let b=document.querySelector("#asosMenHeading");
    a.style.backgroundColor="#525050";
    b.style.backgroundColor="#2d2d2d";
    let c="selectedWomen";
    localStorage.setItem("menWomenSwitchTabLS",c);
    arr=womensClothingData;
    window.location.href="headPart.html";
}

function womenMenSwapFun(){
    container.innerHTML="";
    let a=document.querySelector("#asosWomenHeading");
    let b=document.querySelector("#asosMenHeading");
    b.style.backgroundColor="#525050";
    a.style.backgroundColor="#2d2d2d";
    let c="selectedMen";
    localStorage.setItem("menWomenSwitchTabLS",c);
    arr=mensClothingData;
    window.location.href="headPart.html";
    // menHomePageBlock1.style.display="block";
    // menHomePageBlock2.style.display="block";
    // menHomePageBlock3.style.display="block";
    // menHomePageBlock4.style.display="block";
    // menHomePageBlock5.style.display="block";
    // menHomePageBlock6.style.display="block";
}

function takeUserToProductFun(arr,index){
    let newArr=[];
    newArr.push(arr[index]);
    localStorage.setItem("selectedItemJumpToProduct",JSON.stringify(newArr));
    window.location.href="product.html";
}



document.querySelector("#asosUserInfoHeading").addEventListener("mouseover",userInfoDispFunction);

function userInfoDispFunction(){
    document.querySelector("#asosUserInfoDispHeading").innerHTML="";
    event.preventDefault();
    let div1=document.createElement("div");
    let div2=document.createElement("div");

    let p1=document.createElement("p");
    let p2=document.createElement("p");
    let p3=document.createElement("p");

    let List1=document.createElement("ul");
    let sel1=document.createElement("li");
    let sel2=document.createElement("li");
    let sel3=document.createElement("li");
    let sel4=document.createElement("li");


    p1.innerText="Hi user Name";
    p2.innerText="Sign out";
    p3.innerText="X";
    p3.setAttribute("id","crossUserInfoHeading");


    List1.append(sel1,sel2,sel3,sel4);
    div2.append(List1);
    div1.append(p1,p2,p3);

    

    sel1.innerText="My Account";
    sel2.innerText="My order";
    sel3.innerText="Returns Information";
    sel4.innerText="Contact Preferance";

    document.querySelector("#asosUserInfoDispHeading").append(div1,div2);
}
// document.querySelector("#crossUserInfoHeading").addEventListener("click",userInfoBlockDispFunction);
document.querySelector("#asosUserSearchHeading").addEventListener("mouseover",userInfoBlockDispFunction);
document.querySelector("#asosUserFavHeading").addEventListener("mouseover",userInfoBlockDispFunction);
document.querySelector("#asosUserInfoDispHeading").addEventListener("mouseleave",userInfoBlockDispFunction);
document.querySelector("#headPart1").addEventListener("mouseleave",userInfoBlockDispFunction);

function userInfoBlockDispFunction(){
    document.querySelector("#asosUserInfoDispHeading").innerHTML="";
}
