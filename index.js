const recent_conversation = document.getElementById('recent_convo')
const all_conversation = document.getElementById('all-convo')
const photos =  document.getElementById('photos')
const main = document.querySelector('.container2')

//console.log(recent_conversation)

recent_conversation.addEventListener('click', getrecentconvo)
all_conversation.addEventListener('click', getallconvo)
photos.addEventListener('click', getallphotos)


function getrecentconvo() {
    main.innerHTML = `  <div class="c2r1 clearfix">
    <div class="c2r1b1 left">
      <h2>(508) 555-1234</h2>
      <span id="c2r1toptext">Set a name for this number</span>
     </div>
     <div class="c2r1b2 right">
      <h2>View All Conversations >> </h2>
     </div>
 </div>

 <div class="c2r2b1">
   <h4>New Text Message:</h4>
 </div>

<div class="c2r3 clearfix">
     <div class="c2r3b1 left">
       <input type="text" id="msg">
    </div>
     <div class="c2r3b2 right">
       <a href"#">Send Message</a>
    </div>
</div>

 <div class="c2r4b1">
   <p><u>Attach a photo</u> or <u>schedule for later delivery</u></pn>
 </div>

 <div class="c2r5b1">
     <span>You have 1 <b> message scheduled </b> for later delivery</span>. <a href="#"> Click here to view them.</a>
 </div>

 <div class="c2r2b1 c2r6b1 ">
     <h4 class="c2r6h3">(505)555-1234</h4> <span class="num">Today</span>
</div>

 <div class="c2r3b1 c2r7b1 ">
     <p>OMG - I can't wait to see that movie! what theater do you want to go to? Anything down near Union Sq is really best for me.</p>
</div>

<div class="clearfix">
     <div class="c2r8b1 right">
        <h4>You - (212) 555-1234</h4> <span class="num">Today</span>
     </div>
</div>

 <div class="clearfix">
     <div class="c2r3b1 c2r9b1 right">
         <span>I'm not really sure what's out. I saw a trailer for the Adjustment Bureau the other day on TV. I thought it looked pretty cool.Plus, 
                you *love* Matt!</span>  
    </div>
</div>

<div class="clearfix">
 <div class="c2r6b1 c2r10b1 left">
     <h4>(508) 555-1234</h4>  <span class="num">Yesterday</span>
</div>
</div>

<div class="c2r3b1 c2r11b1">
      <p>A movie sounds perfect. What did you have in mind?</p>
</div>
 
<div class="clearfix">
     <div class="c2r12b1 right">
        <h4>You - (212) 555-1234</h4> <span class="num">Yesterday</span>
     </div>
</div>


  <div class="clearfix">
     <div class="c2r3b1 c2r13b1 right">
          <p>Hey sugar, what are you up to this weekend? Haven't seen you in a while - was hopeing we
           might hang out this weekend... maybe see a movie :)</p>
     </div>
</div>

<div class="clearfix">
     <div class="c2r14b1 left">
        <h4>(508) 555-1234</h4> <span class="num"> About 3 Weeks Ago</span>
     </div>
</div>

<div class="c2r3b1 c2r15b1">
   <p>I know, right?!?!</p>
</div>


     <div class="c2r12b1 c2r16b1 right">
        <h4>You - (212) 555-1234</h4> <span class="num"> About 3 Weeks Ago</span>
     </div>


<div class="clearfix">
     <div class="c2r3b1 c2r17b1 right">
         <span>I'm not really sure what's out. I saw a trailer for the Adjustment Bureau the other day on TV. I thought it looked pretty cool.Plus, 
                you *love* Matt!</span>  
    </div>
</div>
 
<div class="c2r18 clearfix">
     <div class="c2r18b1 right">
         <h3 id=loadtext">Load More Messages</h3>
         <span class="lastdiv">There are 217 more messages in this conversation</span>  
    </div>
</div>
</div> `

}

function  getallconvo() {
    main.innerHTML = 
       `   <div class="top">
       <h1>Top Conversations</h1>
   </div>
   <hr>

   <div class="gridcontainer">
       <div class="griditemsall">
         <h4>(508) 555-1234</h4>
         <p>233 Messages</p>
       </div>
       <div class="griditemsall">
           <p> <mark class="marks"> NEW</mark> OMG - I can't wait to see that movie! What theater do you want to go to? Anything down near Union
               Sq is really best for me.</p>
       </div>
       <div class="griditemsall">
           <h4>Sarah Kelly</h4>
           <p>151 Messages</p>
       </div>
       <div class="griditemsall">
           <p>Thanks for your condolences. The family is taking it pretty hard. But, she was 92 - she lived a really great
               life. This weekend, we're gonna be going through all her old photos. xoxo</p>
       </div>
       <div class="griditemsall">
           <h4>Luke Jones</h4>
           <p>135 Messages</p>
       </div>
       <div class="griditemsall">
           <p>Yeah, I got the package. Next time, you can just leave it at the dry cleaners in the front of my building -
               they are pretty cool about that.</p>
       </div>

   </div>

   <div class="all-convo">
        <h1>All Conversations</h1>
   </div>
   <hr>

   <div class="gridcontainer2">
       <div class="griditemsall">
           <h4>(212) 555-0933</h4>
           <span>17 Messages</span>
       </div>
       <div class="griditemsall">
           <span>Ha ha ha ha - that is hilarious!</span>
       </div>
       <div class="griditemsall">
           <h4>(646) 555-1705</h4>
           <span>3 Messages</span>
       </div>
       <div class="griditemsall">
           <p> <mark class="marks">NEW</mark> It was great to meet you last night. How funny is it that we've both known Jeff for 5 years and have
               never met?!? Hopefully we can get together some time soon.</p>
       </div>
       <div class="griditemsall">
           <h4>(918) 555-2230</h4>
           <span>7 Messages</span>
       </div>
       <div class="griditemsall">
           <p> <mark class="marks"> NEW</mark> Hey, what was the name of the movie you were talking about last night? Something about a dude
               who is cloned and lives on the moon? Or mars? I want to look it up on Netflix.</p>
       </div>
       <div class="griditemsall">
           <h4>Mom</h4>
           <span>38 Messages</span>
       </div>
       <div class="griditemsall">
           <p>Am I ever going to see you again? Are you still alive? You should come up to the house this weekend.</p>
       </div>
       <div class="griditemsall">
           <h4>Katherine Ho</h4>
           <span>12 Messages</span>
       </div>
       <div class="griditemsall">
           <p>At 7:30. But, if we miss that one, there's always the 9:45 show.</p>
       </div>
       <div class="griditemsall">
           <h4>(212) 555-2553</h4>
           <span>11 Messages</span>
       </div>
       <div class="griditemsall">
           <p> <mark class="marks"> NEW</mark> Ha ha, that is straight-up brilliant! I swear, you're not human - it's like your brain refuses to work like
               everyone else's. When your people come to take over the planet, can I be your queen?</p>
       </div>
       <div class="griditemsall">
           <h4>(917) 555-4606</h4>
           <span>10 Messages</span>
       </div>
       <div class="griditemsall">
           <p>Not at all -- Bill and Ted sequal was horrible; but, what I'm saying is that they make some really brilliant
               references to ancient literature and modern philosophy. The whole chess game with the devil - amazing!</p>
       </div>
   </div> `
   
}

function getallphotos() {
    main.innerHTML = ` <div class="top">
    <h1 id="toptext">Photos From All Conversations</h1>
    <hr>
  </div>
      
  <div class="flexcontainer">
      <div class="griditems">
          <img src="1.jpg" alt="img" class="img">
            <div class="content">
              <h4>(508) 555-1234</h4>
              <p>Sent on 03/01/2011</p>
            </div>
      </div>
      <div class="griditems">
          <img src="2.jpg" alt="img" class="img">
          <div class="content">
              <h4>Sarah Kelly</h4>
              <p>Sent on 03/01/2011</p>
          </div>
      </div>
      <div class="griditems"> 
          <img src="3.jpg" alt="img" class="img">
          <div class="content">
              <h4>Luke Jones</h4>
              <p>Sent on 03/01/2011</p>
          </div>  
      </div>
      <div class="griditems">
          <img src="4.jpg" alt="img" class="img">
          <div class="content">
              <h4>(508) 555-1234</h4>
              <p>Sent on 03/01/2011</p>
          </div>
      </div>

      <div class="griditems">
          <img src="5.jfif" alt="img" class="img">
          <div class="content">
              <h4>(508) 555-1234</h4>
              <p>Sent on 03/01/2011</p>
          </div>
      </div>

      <div class="griditems">
          <img src="6.jpg" alt="img" class="img">
          <div class="content">
              <h4>Sarah Kelly</h4>
              <p>Sent on 03/01/2011</p>
          </div>
      </div>

      <div class="griditems">
          <img src="7.jpg" alt="img" class="img">
          <div class="content">
              <h4>Luke Jones</h4>
              <p>Sent on 03/01/2011</p>
          </div>
      </div>

      <div class="griditems">
          <img src="8.jpg" alt="img" class="img">
          <div class="content">
              <h4>(508) 555-1234</h4>
              <p>Sent on 03/01/2011</p>
          </div>
      </div>

      <div class="griditems">
          <img src="9.jfif" alt="img" class="img">
          <div class="content">
              <h4>(508) 555-1234</h4>
              <p>Sent on 03/01/2011</p>
          </div>
      </div>

      
      <div class="griditems">
          <img src="10.jfif" alt="img" class="img">
          <div class="content">
              <h4>Sarah Kelly</h4>
              <p>Sent on 03/01/2011</p>
          </div>
      </div>
   
      <div class="griditems">
          <img src="11.jpg" alt="img" class="img">
          <div class="content">
              <h4>Luke Jones</h4>
              <p>Sent on 03/01/2011</p>
          </div>
      </div>

          
      <div class="griditems">
          <img src="12.jfif" alt="img" class="img">
          <div class="content">
              <h4>(508) 555-1234</h4>
              <p>Sent on 03/01/2011</p>
          </div>
      </div>

  </div>

  <div class="gridlast">
      <div class="contents">
          <h4 id="load">Load More Photos</h4>
          <p>There are 93 more photos across 7 conversations</p>
      </div>
  </div> `
}

main.innerHTML = ` <div class="c2r1 clearfix">
<div class="c2r1b1 left">
  <h2>(508) 555-1234</h2>
  <span id="c2r1toptext">Set a name for this number</span>
 </div>
 <div class="c2r1b2 right">
  <h2>View All Conversations >> </h2>
 </div>
</div>

<div class="c2r2b1">
<h4>New Text Message:</h4>
</div>

<div class="c2r3 clearfix">
 <div class="c2r3b1 left">
   <input type="text" id="msg">
</div>
 <div class="c2r3b2 right">
   <a href"#">Send Message</a>
</div>
</div>

<div class="c2r4b1">
<p><u>Attach a photo</u> or <u>schedule for later delivery</u></pn>
</div>

<div class="c2r5b1">
 <span>You have 1 <b> message scheduled </b> for later delivery</span>. <a href="#"> Click here to view them.</a>
</div>

<div class="c2r2b1 c2r6b1 ">
     <h4 class="c2r6h3">(505)555-1234</h4> <span class="num">Today</span>
</div>

<div class="c2r3b1 c2r7b1 ">
 <p>OMG - I can't wait to see that movie! what theater do you want to go to? Anything down near Union Sq is really best for me.</p>
</div>

<div class="clearfix">
 <div class="c2r8b1 right">
    <h4>You - (212) 555-1234</h4> <span class="num">Today</span>
 </div>
</div>

<div class="clearfix">
 <div class="c2r3b1 c2r9b1 right">
     <span>I'm not really sure what's out. I saw a trailer for the Adjustment Bureau the other day on TV. I thought it looked pretty cool.Plus, 
            you *love* Matt!</span>  
</div>
</div>

<div class="clearfix">
<div class="c2r6b1 c2r10b1 left">
 <h4>(508) 555-1234</h4>  <span class="num">Yesterday</span>
</div>
</div>

<div class="c2r3b1 c2r11b1">
  <p>A movie sounds perfect. What did you have in mind?</p>
</div>

<div class="clearfix">
 <div class="c2r12b1 right">
    <h4>You - (212) 555-1234</h4> <span class="num">Yesterday</span>
 </div>
</div>


<div class="clearfix">
 <div class="c2r3b1 c2r13b1 right">
      <p>Hey sugar, what are you up to this weekend? Haven't seen you in a while - was hopeing we
       might hang out this weekend... maybe see a movie :)</p>
 </div>
</div>

<div class="clearfix">
 <div class="c2r14b1 left">
    <h4>(508) 555-1234</h4> <span class="num"> About 3 Weeks Ago</span>
 </div>
</div>

<div class="c2r3b1 c2r15b1">
<p>I know, right?!?!</p>
</div>


 <div class="c2r12b1 c2r16b1 right">
    <h4>You - (212) 555-1234</h4> <span class="num"> About 3 Weeks Ago</span>
 </div>


<div class="clearfix">
 <div class="c2r3b1 c2r17b1 right">
     <span>I'm not really sure what's out. I saw a trailer for the Adjustment Bureau the other day on TV. I thought it looked pretty cool.Plus, 
            you *love* Matt!</span>  
</div>
</div>

<div class="c2r18 clearfix">
 <div class="c2r18b1 right">
     <h3 id=loadtext">Load More Messages</h3>
     <span class="lastdiv">There are 217 more messages in this conversation</span>  
</div>
</div>
</div> `


