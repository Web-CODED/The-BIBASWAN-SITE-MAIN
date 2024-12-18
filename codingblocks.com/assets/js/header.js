const headerTemplate = document.querySelector('#header');


headerTemplate.innerHTML = `
<div class="container d-flex align-items-center">
<a href="index.html" class="logo mr-auto"><img
        src="/assets/image (1).png" alt="BIBASWAN EDUCATIONAL FOUNDATION"
        class="img-fluid"></a>

<nav class="nav-menu topheadnav">
    <ul>
        <li class="active">
            <a href="#">
                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconLearn.webp" alt="Learn">
                <span>Learn</span>
            </a>
        </li>
        <li><a href="#">
                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconMonitor.webp" alt="Practice">
                <span>Practice</span></a></li>
    
        <li><a href="#">
                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconIDE.webp" alt="IDE">
                <span>IDE</span></a></li>
    </ul>
</nav><!-- .nav-menu -->
<button class="navbar-toggler" type="button">
    <span class="bar"></span>
</button>

</div>

<div class="btmheadnav">
<div class="container d-flex">
    <a href="index.html" class="logo btmlogo mr-auto"><img
            src="/assets/image (1).png" alt="Bibaswan Educational Foundation"
            class="img-fluid"></a>
    <nav class="nav-menu ml-auto">
        <ul>
            <li class="drop-down dropdown megamenu-li"><a href="javascript:;" id="courses" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">All Courses</a>
                <div class="dropdown-menu megamenu">
                    <div class="container">
                        <img class="megamenutop"
                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/megamenutopbg.svg" alt="">
                        <div class="section-title left">
                            <h2>Courses based on subjects</h2>
                            <p>Learn and grow as a developer with our Result oriented pedagogy and project
                                based learning.</p>
                        </div>
                        <div class="coursemenucontent tabpan">

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="coursemenucontent tabpan">

                                        <div class="row">
                                            <div class="col-lg-4 left">
                                                <ul id="tabMMLnk" class="mmtabgroup">
                                                    <li><a href="#tabMM1" class="lstmmtab active"><img
                                                                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp">
                                                            Data structure
                                                            &
                                                            algorithms</a></li>
                                                    <li><a href="#tabMM2" class="lstmmtab"><img
                                                                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCCP.webp">
                                                            Competitive
                                                            Programming</a></li>
                                                    <li><a href="#tabMM3" class="lstmmtab"><img
                                                                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp">
                                                            Interview
                                                            Preperation</a></li>
                                                    <li><a href="#tabMM4" class="lstmmtab"><img
                                                                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCWD.webp">
                                                            Web
                                                            Development</a></li>
                                                    <li><a href="#tabMM5" class="lstmmtab"><img
                                                                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCAndroid.webp">
                                                            Android
                                                            Development</a></li>
                                                    <li><a href="#tabMM6" class="lstmmtab"><img
                                                                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCDS.webp">
                                                            Data
                                                            Science & ML</a></li>
                                                    <li><a href="#tabMM7" class="lstmmtab"><img
                                                                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp">
                                                            Micro
                                                            Courses</a></li>
                                                    <!-- botcamps sam-->
                                                    <li><a href="#tabMM9" class="lstmmtab"><img
                                                                src="assets/img/sun_icon.png"> Bootcamp
                                                            &nbsp;
                                                        </a></li>
                                                    <!-- bootcamps ends -->
                                                    <li><a href="#tabMM12" class="lstmmtab"><img
                                                                src="https://images.codingblocks.com/misc/software.png">
                                                            Java Backend Development
                                                            &nbsp;
                                                        </a></li>
                                                    <li><img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabbdr.svg"
                                                            class="mmtabseparator" alt=""></li>
                                                    <li><a href="#tabMM8" class="lstmmtab mmtabblue"><img
                                                                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/pyramid.png">
                                                            Sampoorna
                                                            Program</a></li>

                                                    <li><a href="#tabMM11" class="lstmmtab mmtabblue"><img
                                                                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp">
                                                            Industrial Training Program</a></li>
                                                    <!-- <li><a href="#tabMM9" class="lstmmtab mmtabblue"><img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/tabindtraining.svg"> Industrial 
                    Traning</a></li> -->
                                                    <!-- adding for scholarship test info  -->
                                                    
                                                    <!-- till here -->
                                                </ul>


                                            </div>
                                            <div class="col-lg-8 right">
                                                <div id="tabMM1" class="mmtab active">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp"
                                                            alt=""> Data
                                                        structure &
                                                        algorithms</h3>
                                                    <p class="txtwhite">Data Structures and Algorithms are
                                                        the building blocks of
                                                        programming & required to write optimised code. They
                                                        are also necessary to start
                                                        development level programs like Web development and
                                                        Android app development. These are
                                                        the skills that are typically tested when students
                                                        appear for Placement drives for
                                                        Jobs and Internships. Ideal for students for first
                                                        and second year of college and for
                                                        those looking forward to Placements & Internships.
                                                        <br> <em>These courses are designed
                                                            for absolute beginners and do not require any
                                                            knowledge of coding.</em>
                                                    </p>
                                                    <div class="coursemenucontainer">
                                                        <div class="coursesmcontaner">
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='data-structures-and-algorithms-using-c-plus-plus.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Master Data structures and Algorithms
                                                                    using C++
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt="">
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='data-structures-and-algorithms-using-java.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/java-white.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Master Data structures and Algorithms
                                                                    using Java
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt="">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='data-structures-and-algorithms-using-python.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/python-white.svg"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Master Data structures and Algorithms
                                                                    using Python
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <hr class="mmbdrtop" />
                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">

                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>
                                                            <!-- End mm accordian Section -->


                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="tabMM2" class="mmtab">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCCP.webp"
                                                            alt="">
                                                        Competitive
                                                        Programming</h3>
                                                    <p class="txtwhite">Competitive programming is generally
                                                        the next step after learning
                                                        Data structures and Algorithms and helps you write
                                                        optimised and efficient code using
                                                        minimalistic methodology. Knowledge of Competitive
                                                        programming is required to prepare
                                                        for and fare Coding competitions like Google
                                                        Codejam, Facebook Hackercup, ACM-ICPC and
                                                        additionally for cracking Big Tech orgs like Google,
                                                        Meta, Arcesium, Zeta and so on.
                                                        <br> <em>This course needs you to have handy
                                                            knowledge of Data structures and
                                                            Algorithms.</em>
                                                    </p>
                                                    <div class="coursemenucontainer">
                                                        <div class="coursesmcontaner">
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='competitive-programming.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCCP.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Master Competitive programming
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt="">
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <hr class="mmbdrtop" />
                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">
                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>
                                                            <!-- End mm accordian Section -->


                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="tabMM3" class="mmtab">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp"
                                                            alt=""> Interview
                                                        Preperation</h3>
                                                    <p class="txtwhite">These courses are designed specially
                                                        for Pre-final and final year
                                                        students who are actively initiating Preperation for
                                                        Placement drives in Tech and IT
                                                        organisations. These are also ideal for Working
                                                        professionals in the 0-2 years Work
                                                        experience range. <br><em> Basis your goal, you can
                                                            either be a beginner learning to
                                                            code or someone who has handy knowledge of Data
                                                            structures and Algorithms.</em></p>
                                                    <div class="coursemenucontainer">
                                                        <div class="coursesmcontaner">
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='interview-preperation-using-c-plus-plus.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Master Interview prep with C++
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt="">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='interview-preperation-using-java.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Master Interview prep with Java
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt="">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='interview-Preperation-non-coding-dmbs-os-networking.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Master Non Coding subjects for Interview
                                                                    drives
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='interview-preperation-for-faang.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Master Preperation for FAANG
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <hr class="mmbdrtop" />
                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">
                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="tabMM4" class="mmtab">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCWD.webp"
                                                            alt=""> Web
                                                        Development</h3>
                                                    <p class="txtwhite">Web development is one of the most
                                                        sought after fields in
                                                        development for Software engineers. If making
                                                        next-gen websites and converting ideas
                                                        to reality excites you, Web development is the right
                                                        choice for you. You will learn
                                                        Full stack development on the most sought after
                                                        frameworks, covering Frontend
                                                        development, Backend development, Deployment,
                                                        Scalability and Security. <br> <em>You
                                                            need to know Coding and should have working
                                                            knowledge of DSA to start Web
                                                            development.</em></p>
                                                    <div class="coursemenucontainer">
                                                        <div class="coursesmcontaner">
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='full-stack-web-development-node-js.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCWD.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Master Full stack Web development using
                                                                    node.JS(MERN)
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt="">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='devops.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/devops-52x52.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Dev Ops
                                                                    <div class="livepan"> <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='system-design.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/systemdesign-52x52.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    System Design
                                                                    <div class="livepan"> <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <hr class="mmbdrtop" />
                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">
                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="tabMM5" class="mmtab">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCAndroid.webp"
                                                            alt="">
                                                        Android
                                                        Development</h3>
                                                    <p class="txtwhite">Android runs on more than 2.5
                                                        billion devices and if making superb
                                                        Apps is what excites you, Android app development is
                                                        the course for you. You will
                                                        learn to build next-gen, user friendly apps using
                                                        Kotlin from gounds-up. In addition,
                                                        you will also learn how to pitch your apps and
                                                        convert ideas to reality. <br><em>You
                                                            need to know Coding and should have working
                                                            knowledge of DSA to start Android app
                                                            development.</em></p>
                                                    <div class="coursemenucontainer">
                                                        <div class="coursesmcontaner">
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='android-development-using-kotlin.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCAndroid.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Master Android app development using
                                                                    Kotlin
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt="">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <hr class="mmbdrtop" />
                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">
                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>
                                                            <!-- End mm accordian Section -->


                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="tabMM6" class="mmtab">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCDS.webp"
                                                            alt=""> Data
                                                        Science & ML</h3>
                                                    <p class="txtwhite">Learn to play with data using
                                                        techniques like data gathering,
                                                        manipulation, cleaning and draw actionable insights
                                                        post processing in Data science.
                                                        In addition, master regression, supervised
                                                        clustering and become an expert ML
                                                        engineer. <br><em> You need to be thorough with
                                                            Python and Mathematics for these
                                                            courses</em></p>
                                                    <div class="coursemenucontainer">
                                                        <div class="coursesmcontaner">
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='data-science-data-analytics-machine-learning-using-python.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCDS.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Master Data science and Machine learning
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt="">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='machine-learning-using-python.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCML.svg"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Master Machine learning
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""> &nbsp;
                                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt="">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='python-for-data-science.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/python-white.svg"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Python for Data science
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <hr class="mmbdrtop" />
                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">
                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>
                                                            <!-- End mm accordian Section -->


                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="tabMM7" class="mmtab">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp"
                                                            alt=""> Micro
                                                        Courses</h3>
                                                    <p class="txtwhite">Browse through an array of short
                                                        term courses aimed at skillifying
                                                        you for your goals, be it mastering yourself for
                                                        FAANG or getting a hang of new
                                                        technology.</p>
                                                    <div class="coursemenucontainer">
                                                        <div class="coursesmcontaner">
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='https://online.codingblocks.com/courses/dynamic-programming-courses-problems-tutorials';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Dynamic Programming - Must Do Problem
                                                                    Set!
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='https://online.codingblocks.com/courses/data-structures-projects-using-javascript';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Data Structures in Real Life Projects
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='https://online.codingblocks.com/courses/graph-data-structure-algorithms';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Graph Algorithms
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='https://online.codingblocks.com/courses/learn-dynamic-programming-online-course';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Dynamic Programming
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://online.codingblocks.com/courses"
                                                            class="btn btn-primary btninline">Explore more
                                                            Micro courses<img
                                                                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                alt="Explore"></a>
                                                        <hr class="mmbdrtop" />
                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">
                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>
                                                            <!-- End mm accordian Section -->


                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="tabMM8" class="mmtab">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/tabillumin.webp"
                                                            alt="">
                                                        Sampoorna
                                                        Program</h3>
                                                    <p class="txtwhite">A meticulously designed 18 months
                                                        long program designed for
                                                        beginners into the world of coding, this course will
                                                        make you an ace coder with
                                                        expertise in Data structures and algorithms which
                                                        are the building blocks of
                                                        programming. After DSA, students will be taught
                                                        Competitive programming and then full
                                                        stack Web development. This will prepare you for all
                                                        the real life challenges you will
                                                        face as a coder and developer and will brace you for
                                                        Internships and placements.</p>
                                                    <div class="coursemenucontainer">
                                                        <div class="coursesmcontaner">
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='sampoorna.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/pyramid.png"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Sampoorna program
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                            height="20px" alt=""> &nbsp;<img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">
                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>
                                                            <!-- End mm accordian Section -->


                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="tabMM9" class="mmtab">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="assets/img/sun_icon.png" alt="">
                                                        Summer Internship Bootcamp</h3>
                                                    <p class="txtwhite">This program is a Project based, 8
                                                        weeks long Certificate Internship
                                                        cohort where students will learn concepts and then
                                                        apply them to build live projects
                                                        to upskill their technical skills.</p>
                                                    <div class="coursemenucontainer">

                                                        <div class="coursesmcontaner">
                                                            <!-- <div class="mmsmbox" onclick="window.location.href='bootcamp-reactjs.html';">
                      <img src="assets/img/react52.png" alt="">
                      <div class="smboxdetail">
                        ReactJS Bootcamp
                        <div class="livepan"><img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp" height="20px" alt=""></div>
                      </div>
                    </div> -->
                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='summer-internship-bootcamp.html';">
                                                                <img src="assets/img/sun_icon.png" alt="">
                                                                <div class="smboxdetail">
                                                                    Summer Internship Bootcamp
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>

                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='bootcamp-levelup.html';">
                                                                <img src="assets/img/levelup52.png" alt="">
                                                                <div class="smboxdetail">
                                                                    Level Up Batch
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>





                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='bootcamp-dp.html';">
                                                                <div class="smboxdetail">
                                                                    Dynamic Programming Batch
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <hr class="mmbdrtop" />
                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">
                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>
                                                            <!-- End mm accordian Section -->


                                                        </div>
                                                    </div>
                                                </div>


                                                <!-- adding mmtab10 -->
                                                

                                                <!-- adding mmtab11 -->
                                                <div id="tabMM11" class="mmtab">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp"
                                                            alt="">
                                                        Industrial Training Program</h3>
                                                    <p class="txtwhite">Coding Blocks offers a comprehensive
                                                        5-6 month Industrial Training Program to equip
                                                        students from diverse educational
                                                        backgrounds with strong programming foundations. The
                                                        curriculum includes Data Structures, Algorithms in
                                                        C++, System
                                                        Design, Interview Preparation, and Full Stack Web
                                                        Development (MERN). The focus is on preparing
                                                        trainees for dream
                                                        technical company interviews. Placement assistance
                                                        is provided, emphasising job drives. The program is
                                                        suitable for
                                                        those with a dedicated semester for industrial
                                                        training or balancing it with regular college.
                                                        Completion certificates
                                                        are awarded upon program completion.</p>
                                                    <div class="coursemenucontainer">

                                                        <div class="coursesmcontaner">

                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='industrial-training.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Industrial Training Program
                                                                    <div class="livepan"><img src=""
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <!-- <a href="https://online.codingblocks.com/courses" class="btn btn-primary btninline">Explore more Bootcamp<img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg" alt="Explore"></a> -->

                                                        <hr class="mmbdrtop" />
                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">
                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>
                                                            <!-- End mm accordian Section -->


                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- closed mmtab11 -->

                                                <!-- adding mmtab12 -->
                                                <div id="tabMM12" class="mmtab">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="https://images.codingblocks.com/misc/software.png"
                                                            alt="">
                                                        Java Backend Development</h3>
                                                    <p class="txtwhite">What is back-end development?
                                                        Back-end development means working on
                                                        server-side software, which focuses on everything
                                                        you can't see on a website. Back-end
                                                        developers ensure the website performs correctly,
                                                        focusing on databases, back-end
                                                        logic, application programming interface (APIs),
                                                        architecture, and servers</p>
                                                    <div class="coursemenucontainer">

                                                        <div class="coursesmcontaner">

                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='java-backend-development.html';">
                                                                <img src="https://images.codingblocks.com/misc/software.png"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Spring Boot / Java Backend Development
                                                                    <div class="livepan"><img src=""
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <!-- <a href="https://online.codingblocks.com/courses" class="btn btn-primary btninline">Explore more Bootcamp<img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg" alt="Explore"></a> -->

                                                        <hr class="mmbdrtop" />
                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">
                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>
                                                            <!-- End mm accordian Section -->


                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- closed mmtab12 -->


                                                <!-- adding mmtab11 -->
                                                <div id="tabMM11" class="mmtab">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp"
                                                            alt="">
                                                        Industrial Training Program</h3>
                                                    <p class="txtwhite">Coding Blocks offers a comprehensive
                                                        5-6 month Industrial Training Program to equip
                                                        students from
                                                        diverse educational
                                                        backgrounds with strong programming foundations. The
                                                        curriculum includes Data Structures, Algorithms in
                                                        C++, System
                                                        Design, Interview Preparation, and Full Stack Web
                                                        Development (MERN). The focus is on preparing
                                                        trainees for dream
                                                        technical company interviews. Placement assistance
                                                        is provided, emphasising job drives. The program is
                                                        suitable for
                                                        those with a dedicated semester for industrial
                                                        training or balancing it with regular college.
                                                        Completion
                                                        certificates
                                                        are awarded upon program completion.</p>
                                                    <div class="coursemenucontainer">

                                                        <div class="coursesmcontaner">

                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='industrial-training.html';">
                                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Industrial Training Program
                                                                    <div class="livepan"><img src=""
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <!-- <a href="https://online.codingblocks.com/courses" class="btn btn-primary btninline">Explore more Bootcamp<img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg" alt="Explore"></a> -->

                                                        <hr class="mmbdrtop" />
                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">
                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>
                                                            <!-- End mm accordian Section -->


                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- closed mmtab11 -->

                                                <!-- adding mmtab12 -->
                                                <div id="tabMM12" class="mmtab">
                                                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                        class="mmtabSel" alt="">
                                                    <h3 class="tabhead"><img class="headicon"
                                                            src="https://images.codingblocks.com/misc/software.png"
                                                            alt="">
                                                        Java Backend Development</h3>
                                                    <p class="txtwhite">What is back-end development?
                                                        Back-end development means working on
                                                        server-side software, which focuses on everything
                                                        you can't see on a website. Back-end
                                                        developers ensure the website performs correctly,
                                                        focusing on databases, back-end
                                                        logic, application programming interface (APIs),
                                                        architecture, and servers</p>
                                                    <div class="coursemenucontainer">

                                                        <div class="coursesmcontaner">

                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='java-backend-development.html';">
                                                                <img src="https://images.codingblocks.com/misc/software.png"
                                                                    alt="">
                                                                <div class="smboxdetail">
                                                                    Spring Boot / Java Backend Development
                                                                    <div class="livepan"><img src=""
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <!-- <a href="#" class="btn btn-primary btninline">Explore more Bootcamp<img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg" alt="Explore"></a> -->

                                                        <hr class="mmbdrtop" />
                                                        <!-- ======= mm accordian Section ======= -->
                                                        <div class="mmaccordion">
                                                            <h5>Confused on which course to choose?</h5>

                                                            <div class="row">

                                                                <div class="clearfix">
                                                                    <a href="classroom-programs.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all Classroom courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Classroom courses"></a>
                                                                    <a href="live-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Live interactive courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Live interactive courses"></a>
                                                                    <a href="online-courses.html"
                                                                        class="btn btn-primary mt-3 scrollto">Explore
                                                                        all
                                                                        Online guided learning courses <img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                            alt="Explore our Online guided learning courses"></a>
                                                                </div>


                                                            </div>
                                                            <!-- End mm accordian Section -->


                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- closed mmtab12 -->

                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>
                            <img class="megamenubtm"
                                src="https://cb3img.s3.ap-south-1.amazonaws.com/img/megamenubtmbg.svg"
                                alt="">
                        </div>
                    </div>

            </li>
            <li><a href="/classroom-programs.html?utm_source=website_navbar&utm_medium=website">Classroom Courses</a></li>
            <li><a href="/live-courses.html?utm_source=website_navbar&utm_medium=website">Live Courses</a></li>
            <li class="drop-down dropdown"><a href="javascript:;" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Community and events</a>
                <ul class="dropdown-menu">
                    <li><a href="community-cb-superhero.html">B.E.F Super hero Community</a></li>
                    
                    <li><a href="cb-workshop-in-college.html">Request Workshop in Institutions</a></li>
                </ul>
            </li>
            <li class="drop-down dropdown"><a href="javascript:;" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Free learning resources</a>
                <ul class="dropdown-menu">
                    <li><a href="#">Code Skiller</a></li>
                    <li><a href="#">Coding contests</a></li>
                    
                    <li><a href="#">Blogs</a></li>

                </ul>
            </li>
            
            
        </ul>
    </nav><!-- .nav-menu -->
</div>
</div>

<div class="mobilemenu">
<nav class="nav-menu">
    <ul>
        <li>
            <a href="#">
                <img class="mbtpicon" src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconLearn.webp"
                    alt="Learn">
                <span>Learn</span>
            </a>
        </li>
        <li><a href="#">
                <img class="mbtpicon" src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconMonitor.webp"
                    alt="Practice">
                <span>Practice</span></a></li>
        
                
        <li><a href="#">
                <img class="mbtpicon" src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconIDE.webp"
                    alt="IDE">
                <span>IDE</span></a></li>
    </ul>
</nav><!-- .nav-menu -->
<nav class="nav-menu">
    <ul>
        <li class="drop-down dropdown"><a href="javascript:;" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">All Courses</a>
            <div class="dropdown-menu">
                <div class="container">
                    <!-- <img class="megamenutop" src="https://cb3img.s3.ap-south-1.amazonaws.com/img/megamenutopbg.svg" alt=""> -->
                    <div class="section-title left">
                        <h2>Courses based on subjects</h2>
                        <p>Learn and grow as a developer with our Result oriented pedagogy and project based
                            learning.</p>
                    </div>
                    <div class="coursemenucontent tabpan">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="coursemenucontent tabpan">

                                    <div class="row">
                                        <div class="col-lg-4 left">
                                            <ul id="mbtabMMLnk" class="mmtabgroup">
                                                <li><a href="#mbtabMM1" class="lstmmtab active"><img
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp">
                                                        Data structures &
                                                        algorithm</a></li>
                                                <li><a href="#mbtabMM2" class="lstmmtab"><img
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCCP.webp">
                                                        Competitive
                                                        Programming</a></li>
                                                <li><a href="#mbtabMM3" class="lstmmtab"><img
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp">
                                                        Interview
                                                        Preperation</a></li>
                                                <li><a href="#mbtabMM4" class="lstmmtab"><img
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCWD.webp">
                                                        Web
                                                        Development</a></li>
                                                <li><a href="#mbtabMM5" class="lstmmtab"><img
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCAndroid.webp">
                                                        Android
                                                        Development</a></li>
                                                <li><a href="#mbtabMM6" class="lstmmtab"><img
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCDS.webp">
                                                        Data
                                                        Science & ML</a></li>
                                                <li><a href="#mbtabMM7" class="lstmmtab"><img
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp">
                                                        Micro
                                                        Courses</a></li>
                                                <!-- botcamps sam-->
                                                <li><a href="#mbtabMM9" class="lstmmtab"><img
                                                            src="assets/img/sun_icon.png"> Summer
                                                        Internship Bootcamp
                                                    </a></li>
                                                <!-- bootcamps ends -->
                                                <li><a href="#mbtabMM12" class="lstmmtab"><img
                                                            src="https://images.codingblocks.com/misc/software.png">
                                                        Java Backend Development
                                                    </a></li>
                                                <li><img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabbdr.svg"
                                                        class="mmtabseparator" alt=""></li>
                                                <li><a href="#mbtabMM8" class="lstmmtab mmtabblue"><img
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/tabillumin.webp">
                                                        Sampoorna
                                                        Program</a></li>
                                                <li><a href="#mbtabMM11" class="lstmmtab mmtabblue"><img
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp">
                                                        Industrial Training Program</a></li>
                                                <!-- <li><a href="#tabMM9" class="lstmmtab mmtabblue"><img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/tabindtraining.svg"> Industrial 
                    Traning</a></li> -->
                                                <!-- adding for scholarship test info  -->
                                                <li><a href="#mbtabMM10" class="lstmmtab mmtabblue"><img
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/tabindtraining.svg">
                                                        Scholarship
                                                        Test
                                                    </a></li>
                                                <!-- till here -->
                                            </ul>


                                        </div>
                                        <div class="col-lg-8 right">
                                            <div id="mbtabMM1" class="mmtab active">
                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                    class="mmtabSel" alt="">
                                                <h3 class="tabhead"><img class="headicon"
                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp"
                                                        alt=""> Data
                                                    structures &
                                                    algorithms</h3>
                                                <p class="txtwhite">Data Structures and Algorithms are the
                                                    building blocks of programming
                                                    & required to write optimised code. They are also
                                                    necessary to start development level
                                                    programs like Web development and Android app
                                                    development. These are the skills that are
                                                    typically tested when students appear for Placement
                                                    drives for Jobs and Internships.
                                                    Ideal for students for first and second year of college
                                                    and for those looking forward to
                                                    Placements & Internships. <br><em>These courses are
                                                        designed for absolute beginners and
                                                        do not require any knowledge of coding.</em></p>
                                                <div class="coursemenucontainer">
                                                    <div class="coursesmcontaner">
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='data-structures-and-algorithms-using-c-plus-plus.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Master Data structures and Algorithms using
                                                                C++
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='data-structures-and-algorithms-using-java.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/java-white.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Master Data structures and Algorithms using
                                                                Java
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='data-structures-and-algorithms-using-python.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/python-white.svg"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Master Data structures and Algorithms using
                                                                Python
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <hr class="mmbdrtop" />
                                                    <!-- ======= mm accordian Section ======= -->
                                                    <div class="mmaccordion">
                                                        <h5>Confused on which course to choose?</h5>

                                                        <div class="row">

                                                            <div class="clearfix">
                                                                <a href="classroom-programs.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Classroom courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Classroom courses"></a>
                                                                <a href="live-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Live
                                                                    interactive courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Live interactive courses"></a>
                                                                <a href="online-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Online guided learning courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Online guided learning courses"></a>
                                                            </div>


                                                        </div>
                                                        <!-- End mm accordian Section -->


                                                    </div>
                                                </div>
                                            </div>

                                            <div id="mbtabMM2" class="mmtab">
                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                    class="mmtabSel" alt="">
                                                <h3 class="tabhead"><img class="headicon"
                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCCP.webp"
                                                        alt=""> Competitive
                                                    Programming</h3>
                                                <p class="txtwhite">Competitive programming is generally the
                                                    next step after learning Data
                                                    structures and Algorithms and helps you write optimised
                                                    and efficient code using
                                                    minimalistic methodology. Knowledge of Competitive
                                                    programming is required to prepare
                                                    for and fare Coding competitions like Google Codejam,
                                                    Facebook Hackercup, ACM-ICPC and
                                                    additionally for cracking Big Tech orgs like Google,
                                                    Meta, Arcesium, Zeta and so on.
                                                    <br> <em>This course needs you to have handy knowledge
                                                        of Data structures and
                                                        Algorithms.</em>
                                                </p>
                                                <div class="coursemenucontainer">
                                                    <div class="coursesmcontaner">
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='competitive-programming.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCCP.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Master Competitive programming
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <hr class="mmbdrtop" />
                                                    <!-- ======= mm accordian Section ======= -->
                                                    <div class="mmaccordion">
                                                        <h5>Confused on which course to choose?</h5>

                                                        <div class="row">

                                                            <div class="clearfix">
                                                                <a href="classroom-programs.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Classroom courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Classroom courses"></a>
                                                                <a href="live-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Live
                                                                    interactive courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Live interactive courses"></a>
                                                                <a href="online-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Online guided learning courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Online guided learning courses"></a>
                                                            </div>


                                                        </div>
                                                        <!-- End mm accordian Section -->


                                                    </div>
                                                </div>
                                            </div>

                                            <div id="mbtabMM3" class="mmtab">
                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                    class="mmtabSel" alt="">
                                                <h3 class="tabhead"><img class="headicon"
                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp"
                                                        alt=""> Interview
                                                    Preperation</h3>
                                                <p class="txtwhite">These courses are designed specially for
                                                    Pre-final and final year
                                                    students who are actively initiating Preperation for
                                                    Placement drives in Tech and IT
                                                    organisations. These are also ideal for Working
                                                    professionals in the 0-2 years Work
                                                    experience range. <br><em> Basis your goal, you can
                                                        either be a beginner learning to
                                                        code or someone who has handy knowledge of Data
                                                        structures and Algorithms.</em></p>
                                                <div class="coursemenucontainer">
                                                    <div class="coursesmcontaner">
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='interview-preperation-using-c-plus-plus.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Master Interview prep with C++
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='interview-preperation-using-java.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Master Interview prep with Java
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='interview-Preperation-non-coding-dmbs-os-networking.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Master Non Coding subjects for Interview
                                                                drives
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='interview-preperation-for-faang.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Master Preperation for FAANG
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <hr class="mmbdrtop" />
                                                    <!-- ======= mm accordian Section ======= -->
                                                    <div class="mmaccordion">
                                                        <h5>Confused on which course to choose?</h5>

                                                        <div class="row">

                                                            <div class="clearfix">
                                                                <a href="classroom-programs.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Classroom courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Classroom courses"></a>
                                                                <a href="live-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Live
                                                                    interactive courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Live interactive courses"></a>
                                                                <a href="online-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Online guided learning courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Online guided learning courses"></a>
                                                            </div>


                                                        </div>
                                                        <!-- End mm accordian Section -->


                                                    </div>
                                                </div>
                                            </div>

                                            <div id="mbtabMM4" class="mmtab">
                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                    class="mmtabSel" alt="">
                                                <h3 class="tabhead"><img class="headicon"
                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCWD.webp"
                                                        alt=""> Web
                                                    Development</h3>
                                                <p class="txtwhite">Web development is one of the most
                                                    sought after fields in development
                                                    for Software engineers. If making next-gen websites and
                                                    converting ideas to reality
                                                    excites you, Web development is the right choice for
                                                    you. You will learn Full stack
                                                    development on the most sought after frameworks,
                                                    covering Frontend development, Backend
                                                    development, Deployment, Scalability and Security. <br>
                                                    <em>You need to know Coding and
                                                        should have working knowledge of DSA to start Web
                                                        development.</em>
                                                </p>
                                                <div class="coursemenucontainer">
                                                    <div class="coursesmcontaner">
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='full-stack-web-development-node-js.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCWD.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Master Full stack Web development using
                                                                node.JS(MERN)
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='devops.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/devops-52x52.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Dev Ops
                                                                <div class="livepan"> <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""> &nbsp;</div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='system-design.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/systemdesign-52x52.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                System Design
                                                                <div class="livepan"> <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""> &nbsp; </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <a href="#" class="btn btn-primary btninline">Explore
                                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                            alt="Explore"></a>
                                                    <hr class="mmbdrtop" />
                                                    <!-- ======= mm accordian Section ======= -->
                                                    <div class="mmaccordion">
                                                        <h5>Confused on which course to choose?</h5>

                                                        <div class="row">

                                                            <div class="clearfix">
                                                                <a href="classroom-programs.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Classroom courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Classroom courses"></a>
                                                                <a href="live-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Live
                                                                    interactive courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Live interactive courses"></a>
                                                                <a href="online-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Online guided learning courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Online guided learning courses"></a>
                                                            </div>


                                                        </div>
                                                        <!-- End mm accordian Section -->


                                                    </div>
                                                </div>
                                            </div>

                                            <div id="mbtabMM5" class="mmtab">
                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                    class="mmtabSel" alt="">
                                                <h3 class="tabhead"><img class="headicon"
                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCAndroid.webp"
                                                        alt=""> Android
                                                    Development</h3>
                                                <p class="txtwhite">Android runs on more than 2.5 billion
                                                    devices and if making superb
                                                    Apps is what excites you, Android app development is the
                                                    course for you. You will learn
                                                    to build next-gen, user friendly apps using Kotlin from
                                                    gounds-up. In addition, you will
                                                    also learn how to pitch your apps and convert ideas to
                                                    reality. <br><em>You need to know
                                                        Coding and should have working knowledge of DSA to
                                                        start Android app development.</em>
                                                </p>
                                                <div class="coursemenucontainer">
                                                    <div class="coursesmcontaner">
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='android-development-using-kotlin.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCAndroid.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Master Android app development using Kotlin
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <hr class="mmbdrtop" />
                                                    <!-- ======= mm accordian Section ======= -->
                                                    <div class="mmaccordion">
                                                        <h5>Confused on which course to choose?</h5>

                                                        <div class="row">

                                                            <div class="clearfix">
                                                                <a href="classroom-programs.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Classroom courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Classroom courses"></a>
                                                                <a href="live-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Live
                                                                    interactive courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Live interactive courses"></a>
                                                                <a href="online-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Online guided learning courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Online guided learning courses"></a>
                                                            </div>


                                                        </div>
                                                        <!-- End mm accordian Section -->


                                                    </div>
                                                </div>
                                            </div>
                                            <div id="mbtabMM6" class="mmtab">
                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                    class="mmtabSel" alt="">
                                                <h3 class="tabhead"><img class="headicon"
                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCDS.webp"
                                                        alt=""> Data
                                                    Science & ML</h3>
                                                <p class="txtwhite">Learn to play with data using techniques
                                                    like data gathering,
                                                    manipulation, cleaning and draw actionable insights post
                                                    processing in Data science. In
                                                    addition, master regression, supervised clustering and
                                                    become an expert ML engineer.
                                                    <br><em> You need to be thorough with Python and
                                                        Mathematics for these courses</em>
                                                </p>
                                                <div class="coursemenucontainer">
                                                    <div class="coursesmcontaner">
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='data-science-data-analytics-machine-learning-using-python.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCDS.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Master Data science and Machine learning
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='machine-learning-using-python.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCML.svg"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Master Machine learning
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""> &nbsp; <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='python-for-data-science.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/python-white.svg"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Python for Data science
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <hr class="mmbdrtop" />
                                                    <!-- ======= mm accordian Section ======= -->
                                                    <div class="mmaccordion">
                                                        <h5>Confused on which course to choose?</h5>

                                                        <div class="row">

                                                            <div class="clearfix">
                                                                <a href="classroom-programs.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Classroom courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Classroom courses"></a>
                                                                <a href="live-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Live
                                                                    interactive courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Live interactive courses"></a>
                                                                <a href="online-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Online guided learning courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Online guided learning courses"></a>
                                                            </div>


                                                        </div>
                                                        <!-- End mm accordian Section -->


                                                    </div>
                                                </div>
                                            </div>
                                            <div id="mbtabMM7" class="mmtab">
                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                    class="mmtabSel" alt="">
                                                <h3 class="tabhead"><img class="headicon"
                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp"
                                                        alt=""> Micro
                                                    Courses</h3>
                                                <p class="txtwhite">Browse through an array of short term
                                                    courses aimed at skillifying you
                                                    for your goals, be it mastering yourself for FAANG or
                                                    getting a hang of new technology.
                                                </p>
                                                <div class="coursemenucontainer">
                                                    <div class="coursesmcontaner">
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='https://online.codingblocks.com/courses/dynamic-programming-courses-problems-tutorials';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Dynamic Programming - Must Do Problem Set!
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='https://online.codingblocks.com/courses/data-structures-projects-using-javascript';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Data Structures in Real Life Projects
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='https://online.codingblocks.com/courses/graph-data-structure-algorithms';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Graph Algorithms
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='https://online.codingblocks.com/courses/learn-dynamic-programming-online-course';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Dynamic Programming
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Online.svg"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="https://online.codingblocks.com/courses"
                                                        class="btn btn-primary btninline">Explore more Micro
                                                        courses <img
                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                            alt="Explore"></a>
                                                    <hr class="mmbdrtop" />
                                                    <!-- ======= mm accordian Section ======= -->
                                                    <div class="mmaccordion">
                                                        <h5>Confused on which course to choose?</h5>

                                                        <div class="row">

                                                            <div class="clearfix">
                                                                <a href="classroom-programs.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Classroom courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Classroom courses"></a>
                                                                <a href="live-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Live
                                                                    interactive courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Live interactive courses"></a>
                                                                <a href="online-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Online guided learning courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Online guided learning courses"></a>
                                                            </div>


                                                        </div>
                                                        <!-- End mm accordian Section -->


                                                    </div>
                                                </div>
                                            </div>

                                            <div id="mbtabMM8" class="mmtab">
                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                    class="mmtabSel" alt="">
                                                <h3 class="tabhead"><img class="headicon"
                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/tabillumin.webp"
                                                        alt=""> Sampoorna
                                                    Program</h3>
                                                <p class="txtwhite">A meticulously designed 18 months long
                                                    program designed for beginners
                                                    into the world of coding, this course will make you an
                                                    ace coder with expertise in Data
                                                    structures and algorithms which are the building blocks
                                                    of programming. After DSA,
                                                    students will be taught Competitive programming and then
                                                    full stack Web development.
                                                    This will prepare you for all the real life challenges
                                                    you will face as a coder and
                                                    developer and will brace you for Internships and
                                                    placements.</p>
                                                <div class="coursemenucontainer">
                                                    <div class="coursesmcontaner">
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='sampoorna.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/pyramid.png"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Sampoorna program
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Classroom.webp"
                                                                        height="20px" alt=""> &nbsp;<img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <hr class="mmbdrtop" />
                                                    <!-- ======= mm accordian Section ======= -->
                                                    <div class="mmaccordion">
                                                        <h5>Confused on which course to choose?</h5>

                                                        <div class="row">

                                                            <div class="clearfix">
                                                                <a href="classroom-programs.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Classroom courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Classroom courses"></a>
                                                                <a href="live-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Live
                                                                    interactive courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Live interactive courses"></a>
                                                                <a href="online-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Online guided learning courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Online guided learning courses"></a>
                                                            </div>


                                                        </div>
                                                        <!-- End mm accordian Section -->


                                                    </div>
                                                </div>
                                            </div>





                                            <!-- adding mmtab12 -->
                                            <div id="mbtabMM12" class="mmtab">
                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                    class="mmtabSel" alt="">
                                                <h3 class="tabhead"><img class="headicon"
                                                        src="https://images.codingblocks.com/misc/software.png"
                                                        alt="">
                                                    Java Backend Development</h3>
                                                <p class="txtwhite">What is back-end development? Back-end
                                                    development means working on
                                                    server-side software, which focuses on everything you
                                                    can't see on a website. Back-end
                                                    developers ensure the website performs correctly,
                                                    focusing on databases, back-end logic,
                                                    application programming interface (APIs), architecture,
                                                    and servers</p>
                                                <div class="coursemenucontainer">

                                                    <div class="coursesmcontaner">

                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='java-backend-development.html';">
                                                            <img src="https://images.codingblocks.com/misc/software.png"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Spring Boot / Java Backend Development
                                                                <div class="livepan"><img src=""
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <!-- <a href="#" class="btn btn-primary btninline">Explore more Bootcamp<img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg" alt="Explore"></a> -->

                                                    <hr class="mmbdrtop" />
                                                    <!-- ======= mm accordian Section ======= -->
                                                    <div class="mmaccordion">
                                                        <h5>Confused on which course to choose?</h5>

                                                        <div class="row">

                                                            <div class="clearfix">
                                                                <a href="classroom-programs.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Classroom courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Classroom courses"></a>
                                                                <a href="live-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Live
                                                                    interactive courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Live interactive courses"></a>
                                                                <a href="online-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Online guided learning courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Online guided learning courses"></a>
                                                            </div>


                                                        </div>
                                                        <!-- End mm accordian Section -->


                                                    </div>
                                                </div>
                                            </div>
                                            <!-- closed mmtab12 -->






                                            <div id="mbtabMM9" class="mmtab">
                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                    class="mmtabSel" alt="">
                                                <h3 class="tabhead"><img class="headicon"
                                                        src="assets/img/sun_icon.png" alt="">
                                                    Summer Internship Bootcamp</h3>
                                                <p class="txtwhite">This program is a Project based, 8 weeks
                                                    long Certificate Internship
                                                    cohort where students will learn concepts and then apply
                                                    them to build live projects to
                                                    upskill their technical skills.</p>
                                                <div class="coursemenucontainer">

                                                    <div class="coursesmcontaner">
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='summer-internship-bootcamp.html';">
                                                            <img src="assets/img/sun_icon.png" alt="">
                                                            <div class="smboxdetail">
                                                                Summer Internship Bootcamp
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>
                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='bootcamp-levelup.html';">
                                                            <img src="assets/img/levelup52.png" alt="">
                                                            <div class="smboxdetail">
                                                                Level Up Batch
                                                                <div class="livepan"><img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                        height="20px" alt=""></div>
                                                            </div>



                                                            <div class="mmsmbox"
                                                                onclick="window.location.href='bootcamp-dp.html';">
                                                                <div class="smboxdetail">
                                                                    Dynamic Programming Batch
                                                                    <div class="livepan"><img
                                                                            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/batchlive.webp"
                                                                            height="20px" alt=""></div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <!-- <a href="#" class="btn btn-primary btninline">Explore more Bootcamp<img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg" alt="Explore"></a> -->

                                                    <hr class="mmbdrtop" />
                                                    <!-- ======= mm accordian Section ======= -->
                                                    <div class="mmaccordion">
                                                        <h5>Confused on which course to choose?</h5>

                                                        <div class="row">

                                                            <div class="clearfix">
                                                                <a href="classroom-programs.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Classroom courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Classroom courses"></a>
                                                                <a href="live-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Live
                                                                    interactive courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Live interactive courses"></a>
                                                                <a href="online-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Online guided learning courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Online guided learning courses"></a>
                                                            </div>


                                                        </div>
                                                        <!-- End mm accordian Section -->


                                                    </div>
                                                </div>
                                            </div>





                                            <!-- adding mmtab10 -->
                                          

                                            <!-- adding mmtab11 -->
                                            <div id="mbtabMM11" class="mmtab">
                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                    class="mmtabSel" alt="">
                                                <h3 class="tabhead"><img class="headicon"
                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp"
                                                        alt="">
                                                    Industrial Training Program</h3>
                                                <p class="txtwhite">Coding Blocks offers a comprehensive 5-6
                                                    month Industrial Training Program to equip students from
                                                    diverse educational
                                                    backgrounds with strong programming foundations. The
                                                    curriculum includes Data Structures, Algorithms in C++,
                                                    System
                                                    Design, Interview Preparation, and Full Stack Web
                                                    Development (MERN). The focus is on preparing trainees
                                                    for dream
                                                    technical company interviews. Placement assistance is
                                                    provided, emphasising job drives. The program is
                                                    suitable for
                                                    those with a dedicated semester for industrial training
                                                    or balancing it with regular college. Completion
                                                    certificates
                                                    are awarded upon program completion.</p>
                                                <div class="coursemenucontainer">

                                                    <div class="coursesmcontaner">

                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='industrial-training.html';">
                                                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Industrial Training Program
                                                                <div class="livepan"><img src=""
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <!-- <a href="#" class="btn btn-primary btninline">Explore more Bootcamp<img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg" alt="Explore"></a> -->

                                                    <hr class="mmbdrtop" />
                                                    <!-- ======= mm accordian Section ======= -->
                                                    <div class="mmaccordion">
                                                        <h5>Confused on which course to choose?</h5>

                                                        <div class="row">

                                                            <div class="clearfix">
                                                                <a href="classroom-programs.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Classroom courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Classroom courses"></a>
                                                                <a href="live-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Live interactive courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Live interactive courses"></a>
                                                                <a href="online-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Online guided learning courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Online guided learning courses"></a>
                                                            </div>


                                                        </div>
                                                        <!-- End mm accordian Section -->


                                                    </div>
                                                </div>
                                            </div>
                                            <!-- closed mmtab11 -->

                                            <!-- adding mmtab12 -->
                                            <div id="tabMM12" class="mmtab">
                                                <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/mmtabarrowsel.svg"
                                                    class="mmtabSel" alt="">
                                                <h3 class="tabhead"><img class="headicon"
                                                        src="https://images.codingblocks.com/misc/software.png"
                                                        alt="">
                                                    Java Backend Development</h3>
                                                <p class="txtwhite">What is back-end development? Back-end
                                                    development means working on
                                                    server-side software, which focuses on everything you
                                                    can't see on a website. Back-end
                                                    developers ensure the website performs correctly,
                                                    focusing on databases, back-end logic,
                                                    application programming interface (APIs), architecture,
                                                    and servers</p>
                                                <div class="coursemenucontainer">

                                                    <div class="coursesmcontaner">

                                                        <div class="mmsmbox"
                                                            onclick="window.location.href='java-backend-development.html';">
                                                            <img src="https://images.codingblocks.com/misc/software.png"
                                                                alt="">
                                                            <div class="smboxdetail">
                                                                Spring Boot / Java Backend Development
                                                                <div class="livepan"><img src=""
                                                                        height="20px" alt=""></div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <!-- <a href="#" class="btn btn-primary btninline">Explore more Bootcamp<img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg" alt="Explore"></a> -->

                                                    <hr class="mmbdrtop" />
                                                    <!-- ======= mm accordian Section ======= -->
                                                    <div class="mmaccordion">
                                                        <h5>Confused on which course to choose?</h5>

                                                        <div class="row">

                                                            <div class="clearfix">
                                                                <a href="classroom-programs.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Classroom courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Classroom courses"></a>
                                                                <a href="live-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all Live
                                                                    interactive courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Live interactive courses"></a>
                                                                <a href="online-courses.html"
                                                                    class="btn btn-primary mt-3 scrollto">Explore
                                                                    all
                                                                    Online guided learning courses <img
                                                                        src="https://cb3img.s3.ap-south-1.amazonaws.com/img/arrowright-w.svg"
                                                                        alt="Explore our Online guided learning courses"></a>
                                                            </div>


                                                        </div>
                                                        <!-- End mm accordian Section -->


                                                    </div>
                                                </div>
                                            </div>
                                            <!-- closed mmtab12 -->
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                        <!-- <img class="megamenubtm" src="https://cb3img.s3.ap-south-1.amazonaws.com/img/megamenubtmbg.svg" alt=""> -->
                    </div>
                </div>
        </li>
        <li><a href="/classroom-programs.html?utm_source=website_navbar&utm_medium=website">Classroom Courses</a></li>
        <li><a href="/live-courses.html?utm_source=website_navbar&utm_medium=website">Live Courses</a></li>
        <li class="drop-down dropdown"><a href="javascript:;" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">Community and events</a>
            <ul class="dropdown-menu">
                
            <li><a href="community-cb-superhero.html">CB Super hero Community</a></li>
                <li><a href="cb-workshop-in-college.html">Request Workshop in college</a></li>
            </ul>
        </li>
        <li class="drop-down dropdown"><a href="javascript:;" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">Free learning resources</a>
            <ul class="dropdown-menu">
                <li><a href="#">Code Skiller</a></li>
                <li><a href="#">Coding contests</a></li>
                
                <li><a href="#">Blogs</a></li>
            </ul>
        </li>
        <li><a href="#">Career bootcamp</a></li>
    </ul>
</nav><!-- .nav-menu -->
</div>
`
