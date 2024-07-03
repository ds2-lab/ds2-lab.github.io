---
hide:
  - navigation 
  - toc        
---

<script src="//code.iconify.design/1/1.0.6/iconify.min.js"></script>

<style>

  .responsive-grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }

  @media screen and (min-width: 64rem) {
    .responsive-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card-wrapper {
    text-decoration: none;
    transition: none;
    background: none;
    padding: 0;
  }

  .card {
    position: relative;
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    -moz-box-align: center;
    align-items: center;
    height: 90%;
    -moz-box-pack: start;
    justify-content: flex-start;
    box-shadow: rgba(0, 0, 0, 0.1) 0.4rem 0.4rem 0px -0.0625rem, rgba(0, 0, 0, 0.40) 0px 0.50rem 0.5rem 0px;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  }

  .card:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0.40rem 0.40rem 0px -0.0625rem, rgba(0, 0, 0, 0.60) 0px 0.50rem 0.5rem 0px;
  }

  @media screen and (min-width: 75rem) {
    .card {
      padding: 2rem 2.5rem;
      margin: 0px 1px;
      border-radius: 4px;
    }
  }

  @media screen and (min-width: 36rem) {
    .card {
      padding: 1rem 1.5rem;
      margin: 0px 1px;
      border-radius: 4px;

    }
  }

  .card .logo {
    margin-right: 0.75rem;
    width: 80px;
    height: 80px;
  }

  .card .card-content {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    width: 100%;
  }

  .cardback{
  background-color: #ADAEB3;
  }

  #container-background {
        top: 0px;
        left: 0px;
        background-color: #ADAEB3; /* Use background-image or whatever suits you here */
        width: 100%; /* Your width */
        height: 70px; /* Your height */
    }​ 

  .card .card-content h3 {
    margin: 0;
  }
  
   .card .card-content h5 {
    margin: 0;
  }

  .card .card-content li {
    margin-top: 0.25em;
    margin-bottom: 0;
    font-size: 14px;
  }
  
  .li{
    font-size: 15px;
  }

  .card .card-content p {
    margin-top: 0.25em;
    margin-bottom: 0;
  }

  .card .card-content code {
    background: rgba(0, 0, 0, 0.05) none repeat scroll 0% 0%;
    padding: 2px 6px;
    border-radius: 4px;
  }


  .component-wrapper span.em {
    color: rgb(61, 61, 61);
  }

  .component-wrapper a {
    transition: color 125ms;
    padding: 2px 6px;
    margin: 0px 1px;
    border-radius: 4px;
    display: inline;
    cursor: pointer;
  }

  .component-wrapper a:hover {
    color: var(--md-typeset-a-color);
    background: var(--md-accent-fg-color--transparent);
  }
</style>


## Lab Director

<table width="600px">
	<tr>
		<th width="50%"> <h3>Dr. Yue Cheng</h3> </th>
	</tr>
	<tr>
		<td width="600px">
			&nbsp;&nbsp; <img style="vertical-align:middle" src="../images/YueCheng.png" width="100px">
			<ul>
				<li><b>Bio:</b> Yue Cheng is an Associate Professor of Data Science and Computer Science at the University of Virginia. He graduated with a Ph.D. degree in Computer Science from Virginia Tech in 2017. </li>
				<li><a target="_blank" href="https://tddg.github.io"><span class="iconify" data-align="bottom" data-width="26" data-height="26" data-icon="bx:bxs-home" data-inline="false"></span></a>&nbsp;&nbsp;
				<a target="_blank" href="https://scholar.google.com/citations?user=TMGwBH0AAAAJ&hl=en"><span class="iconify" data-align="bottom" data-width="26" data-height="26" data-icon="simple-icons:googlescholar" data-inline="false"></span></a>&nbsp;&nbsp;
				<a target="_blank" href="https://github.com/tddg"><span class="iconify" data-align="bottom" data-width="24" data-height="24" data-icon="ant-design:github-filled" data-inline="false"></span></a></li>
  			<ul>
		</td>
	</tr>
</table>

-------------------

## Ph.D. Students

<div class="responsive-grid">
  <div class="card">
    <div class="logo">
	  <img src="../images/ZhengChai.jpg" alt="Headshot of Zheng Chai.">
	</div>
	  <div class="card-content">
       	<h3>Zheng Chai</h3>
       	  <ul>
  			<li><b>5th Year Ph.D. Student in Computer Science</b></li>
  			<li><b>Research Interests:</b> Machine learning systems</li>
  			<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a target="_blank" href="https://zheng-chai.github.io/">zheng-chai.github.io/</a></li>
		  </ul>
	  </div>
  </div>

  <div class="card">
    <div class="logo">
	  <img src="../images/YuqiFu.jpg" alt="Headshot of Yuqi Fu.">
	</div>
	  <div class="card-content">
       	<h3>Yuqi Fu</h3>
       	  <ul>
  			<li><b>4th Year Ph.D. Student in Computer Science</b></li>
  			<li><b>Research Interests:</b> Operating systems</li>
  			<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a target="_blank" href="https://fishercht1995.github.io/">fishercht1995.github.io</a></li>
		  </ul>
	  </div>
  </div>

  <div class="card">
    <div class="logo">
	  <img src="../images/BenCarver.png" alt="Headshot of Ben Carver.">
	</div>
	  <div class="card-content">
       	<h3>Ben Carver</h3>
       	  <ul>
  			<li><b>3rd Year Ph.D. Student in Computer Science</b></li>
  			<li><b>Research Interests:</b> Serverless parallel computing</li>
  			<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a target="_blank" href="https://scusemua.github.io/">scusemua.github.io/</a></li>
		  </ul>
	  </div>
  </div>

  <div class="card">
    <div class="logo">
	  <img src="../images/ZhaoyuanSu.jpg" alt="Headshot of Zhaoyuan Su.">
	</div>
	  <div class="card-content">
       	<h3>Zhaoyuan (Alex) Su</h3>
       	  <ul>
  			<li><b>3rd Year Ph.D. Student in Computer Science</b></li>
  			<li><b>Research Interests:</b> Data reduction, Sys4ML, serverless computing</li>
  			<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a target="_blank" href="https://alexsssu.github.io/">alexsssu.github.io/</a></li>
		  </ul>
	  </div>
  </div>

  <div class="card">
    <div class="logo">
	  <img src="../images/RuiYang.jpeg" alt="Headshot of Rui Yang.">
	</div>
	  <div class="card-content">
       	<h3>Rui Yang</h3>
       	  <ul>
  			<li><b>3rd Year Ph.D. Student in Computer Science</b></li>
  			<li><b>Research Interests:</b> Storage systems</li>
  			<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a target="_blank" href="https://mason.gmu.edu/~ryang22/">mason.gmu.edu/~ryang22/</a></li>
		  </ul>
	  </div>
  </div>

  <div class="card">
    <div class="logo">
	  <img src="../images/ZiruiWang.jpg" alt="Headshot of Zirui Wang.">
	</div>
	  <div class="card-content">
       	<h3>Zirui Wang</h3>
       	  <ul>
  			<li><b>1st Year Ph.D. Student in Computer Science</b> (joining Fall 2024)</li>
  			<li><b>Research Interests:</b> ML systems</li>
		  </ul>
	  </div>
  </div>

  <div class="card">
    <div class="logo">
	  <img src="../images/TingfengLan.jpg" alt="Headshot of Tingfeng Lan.">
	</div>
	  <div class="card-content">
       	<h3>Tingfeng Lan</h3>
       	  <ul>
  			<li><b>1st Year Ph.D. Student in Computer Science</b> (joining Fall 2024)</li>
  			<li><b>Research Interests:</b> ML systems</li>
		  </ul>
	  </div>
  </div>


</div>

-------------------

## Master's Students

<div class="responsive-grid">
  <div class="card">
    <div class="logo">
	  <img src="../images/RafaelMadrid.jpg" alt="Headshot of Rafael Alejandro Madrid Rivera.">
	</div>
	  <div class="card-content">
       	<h3>Rafael Alejandro Madrid Rivera</h3>
       	  <ul>
  			<li><b>Master's Student in Computer Science @ GMU</b></li>
  			<li><b>Research Interests:</b> Storage systems</li>
		  </ul>
	  </div>
  </div>
</div>


-------------------

## Undergraduate Students

<div class="responsive-grid">
  <div class="card">
    <div class="logo">
	  <img src="../images/JunhoLee.jpg" alt="Headshot of Junho Lee.">
	</div>
	  <div class="card-content">
       	<h3>Junho Lee</h3>
       	  <ul>
  			<li><b>Undergraduate Student in Computer Science @ UVA</b></li>
  			<li><b>Project:</b> Model compression</li>
		  </ul>
	  </div>
  </div>

  <div class="card">
    <div class="logo">
	  <img src="../images/SherryZhao.png" alt="Headshot of Ziqian (Sherry) Zhao.">
	</div>
	  <div class="card-content">
       	<h3>Sherry Zhao</h3>
       	  <ul>
  			<li><b>Undergraduate Student in Computer Science @ UVA</b></li>
  			<li><b>Project:</b> Model quantization</li>
		  </ul>
	  </div>
  </div>
  
  <div class="card">
    <div class="logo">
	  <img src="../images/HuaruiLiu.jpg" alt="Headshot of Huarui Liu.">
	</div>
	  <div class="card-content">
       	<h3>Huarui Liu</h3>
       	  <ul>
  			<li><b>Undergraduate Student in Computer Science @ UVA</b></li>
  			<li><b>Project:</b> Model quantization</li>
		  </ul>
	  </div>
  </div>
</div>



-------------------

## High School Students

<div class="responsive-grid">
  <div class="card">
    <div class="logo">
	  <img src="../images/ttt.jpg" alt="Headshot of Emi Zhang.">
	</div>
	  <div class="card-content">
       	<h3>Emi Zhang</h3>
       	  <ul>
  			<li><b>Sophomore at Thomas Jefferson High School for Science and Technology</b></li>
  			<li><b>Position after DataSys Lab:</b> TBD</li>
		  </ul>
	  </div>
  </div>

  <div class="card">
    <div class="logo">
	  <img src="../images/ttt.jpg" alt="Headshot of Jawand Singh.">
	</div>
	  <div class="card-content">
       	<h3>Jawand Singh</h3>
       	  <ul>
  			<li><b>Sophomore at Thomas Jefferson High School for Science and Technology</b></li>
  			<li><b>Position after DataSys Lab:</b> TBD</li>
		  </ul>
	  </div>
  </div>
</div>


-------------------

## Alumni

<div class="responsive-grid">
  <div class="card">
    <div class="logo">
	  <img src="../images/AoWang.jpeg" alt="Headshot of Ao Wang.">
	</div>
	  <div class="card-content">
       	<h3>Ao Wang</h3>
       	  <ul>
  			<li><b>Ph.D. Student in Computer Science</b> (currently on leave and is with Alibaba Cloud)</li>
  			<li><b>Research Interests:</b> Serverless computing</li>
  			<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a target="_blank" href="https://wangaoone.github.io/">wangaoone.github.io/</a></li>
		  </ul>
	  </div>
  </div>

  <div class="card">
    <div class="logo">
	  <img src="../images/JingyuanZhang.jpg" alt="Headshot of Jingyuan Zhang.">
	</div>
	  <div class="card-content">
       	<h3>Jingyuan Zhang</h3>
       	  <ul>
  			<li><b>Ph.D. (Fall 2018 - Summer 2023)</b></li>
  			<li><b>Research Interests:</b> Cloud storage; serverless computing</li>
  			<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a target="_blank" href="https://zhangjyr.github.io/">zhangjyr.github.io/</a></li>
			<li><b>First employment:</b> Cloud native infrastructure team @ ByteDance
		  </ul>
	  </div>
  </div>
</div>

