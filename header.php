<header>
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container-fluid px-lg-5">
            <div class="row align-items-center">
                <!-- Phone -->
                <div class="col-12 col-md-4 col-lg-3">
                    <div class="top-bar-contact">
                        <i class="bi bi-telephone-fill mr-2"></i>
                        <h6 class="top-bar-heading">Call Us: &nbsp;</h6>
                        <p class="top-bar-text">(+91) 87543 13122</p>
                    </div>
                </div>

                <!-- Mail -->
                <div class="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
                    <div class="top-bar-contact">
                        <div class="row no-gutters align-items-center w-100">
                            <i class="bi bi-envelope-fill mr-2"></i>
                            <h6 class="top-bar-heading">Mail Us: &nbsp;</h6>
                            <p class="top-bar-text">shalomlifecenter25@gmail.com</p>
                        </div>
                    </div>
                </div>

                <!-- Tagline - Center on desktop, full width on mobile -->
                <div class="col-12 col-md-4 col-lg-3 mt-2 mt-md-0 d-none d-lg-block">
                    <p class="top-bar-text text-center text-lg-center">Shalom Life Center - Transforming Lives Since
                        2015</p>
                </div>

                <!-- Social Icons -->
                <div class="col-12 col-md-12 col-lg-3 mt-2 mt-lg-0 d-none d-lg-block">
                    <div class="top-bar-social">
                        <a href="#" class="social-icon"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="social-icon"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="bi bi-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- lg,lg+ Navbar large logo -->
    <div class="container desktop-nav">
        <div class="row">
            <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-light hanging-navbar rounded-pill">
                    <div class="container">
                        <a class="navbar-brand" href="index.php">
                            <img src="images/logo.webp" alt="Shalom Life Center" class="navbar-logo">
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.php">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">About Us</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="#" id="dropdown01" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Services
                                        <i class="bi bi-caret-down-fill dropdown-caret"></i>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                                        <a class="dropdown-item" href="services.php#child-care">Children Orphan Shelter
                                            Services</a>
                                        <a class="dropdown-item" href="services.php#elder-care">Elderly Care
                                            Services</a>
                                        <a class="dropdown-item" href="services.php#women-care">Women Empowerment
                                            Services</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <!-- tabnav & mobile nav -->
    <div class="small-nav container-fluid p-0" id="mobile-nav">
        <nav class="navbar navbar-expand-lg navbar-dark text-white bg-red">
            <div class="container-fluid px-0">
                <a class="navbar-brand" href="index.php">
                    <img class="img-fluid" src="images/logo.webp" alt="logo small nav">
                </a>
                <button class="navbar-toggler x" type="button" data-toggle="collapse" data-target="#mobileNavContent"
                    aria-controls="mobileNavContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="collapse navbar-collapse" id="mobileNavContent">
                    <ul class="navbar-nav ml-lg-auto"> <!-- Changed to ml-lg-auto -->
                        <li class="nav-item active">
                            <a class="nav-link text-white" href="index.php">Home <span
                                    class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#about">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="mobileDropdown01"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                                <i class="bi bi-caret-down-fill dropdown-caret"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="mobileDropdown01">
                                <a class="dropdown-item" href="#child-care">Children Orphan Shelter Services</a>
                                <a class="dropdown-item" href="#elder-care">Elderly Care Services</a>
                                <a class="dropdown-item" href="#women-care">Women Empowerment Services</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#contact">Contact Us</a>
                        </li>
                        <li
                            class="nav-item d-flex align-items-center justify-content-center bg-peach text-dark p-2 rounded-pill">
                            <p class="mb-0"><i class="bi bi-telephone-fill"></i>+91 87543 13122</p>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>