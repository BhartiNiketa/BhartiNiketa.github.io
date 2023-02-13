/**
 * Javascript variables
 */
 
//RTL support
var rtl = false;                                //Set to true if your website is RTL. Otherwise, keep it false.

//ONE-PAGE NAVIGATION HIGHLIGHT
var onepage_nav = true;                         //If true, each menu item will highlight when scrolling to each respective section.

//MOBILE MENU TITLE
var mobile_menu_title = "Menu";                 //The title of the mobile menu.

//HERO FULLSCREEN VARIABLE
var hero_full_screen = true;                    //If true, the hero section will fit to screen size. If false, hero height will be the height of its content.

//HERO BACKGROUND SLIDESHOW IMAGES
var slidehow_images = [
    "images/hero-img1.jpg",
    "images/hero-img2.jpg",
    "images/hero-img3.jpg",
    "images/hero-img4.jpg",
    "images/hero-img5.jpg"
];

//TIMELINE PARALLAX
var timeline_parallax = true;                   //If false, the timeline items will not move on mousemove.


//CONTACT FORM VARIABLES
var contact_form_success_msg = "Form successfully submitted! :)";
var contact_form_error_msg = "Error sending message :(";
var contact_form_recaptcha_error_msg = "Error verifying reCaptcha!";


//COUNTDOWN VARIABLES
var c_days = "DAYS";                            //Countdown "Days" label
var c_hours = "HOURS";                          //Countdown "Hours" label
var c_minutes = "MIN.";                         //Countdown "Minutes" label
var c_seconds = "SEC.";                         //Countdown "Seconds" label
var countdown_end_msg = "Event Started!";       //Message to display when the countdown reaches the end


//GOOGLE MAP VARIABLES
var map_canvas_id = "map_canvas";               //The HTML "id" of the map canvas
var map_color = "#8eaeba";                      //Google map color
var map_initial_zoom = 15;                      //The initial zoom when Google map loads
var map_initial_latitude = 25.4249225;           //Google map initial Latitude. If "null", the latitude of the first marked will be used
var map_initial_longitude = 86.1137038;        //Google map initial Longitude. If "null", the longitude of the first marked will be used
var use_default_map_style = false;              //If true, default map style will be used

//List of map markers
var map_markers = [
    {
        "title": "Reception",
        "latitude": 25.4249225,
        "longitude": 86.1137038,
        "icon": "fas fa-glass-cheers", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Old Ranch Country Club <br> 29033 West Lake Drive, Agoura Hills, CA"
    },
    {
        "title": "Wedding Venue",
        "latitude": 25.4282634,
        "longitude": 86.0963223,
        "icon": "fas fa-bed", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Harsh Garden <br> Singhaul, Begusarai, Bihar-851101"
    },
    {
        "title": "Haldi & Mehendi",
        "latitude": 25.4229918,
        "longitude": 86.1227701,
        "icon": "fas fa-bed", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Sri Krishna Paradise <br> Subhash Chowk, Begusarai, Bihar 851101"
    },
    {
        "title": "Barat Accomdation",
        "latitude": 25.4435606,
        "longitude": 86.025032,
        "icon": "fas fa-bed", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Hotel Devi Darbar <br> NH 31, Zero Mile, Barauni, Bihat-IV, Bihar 851115"
    },
    {
        "title": "Barat March",
        "latitude": 25.4231374,
        "longitude": 86.107814,
        "icon": "fas fa-plane", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Swagat Dhaba (Jublee Campus) <br> NH 31, Refinery Twp, Begusarai, Bihar 851117"
    }
];