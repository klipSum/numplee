const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const MongoClient = require("mongodb").MongoClient;

require("dotenv").config()

const open = process.env.takeOpenly






// INITIALIZE EXPRESS -----------------------------------------------------------
// //////////////////////////////////////////////////////////////////////////////

    const app = express();
    
    
    
    
    
    
    
// INITIALIZE BODY PARSER -------------------------------------------------------
// //////////////////////////////////////////////////////////////////////////////

    // parse application/x-www-form-urlencoded xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        app.use(bodyparser.urlencoded({ extended: true }))

    // parse application/json xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        app.use(bodyparser.json())
    
    
    
    
    
    
    
// BRING IN STATIC FILES --------------------------------------------------------
// //////////////////////////////////////////////////////////////////////////////

    // FOR STYLES ---------------------------------------------------------------
    // //////////////////////////////////////////////////////////////////////////

        app.use("/public/styles", express.static("./public/styles"));



    // FOR SCRIPTS --------------------------------------------------------------
    // //////////////////////////////////////////////////////////////////////////

        app.use("/public/scripts", express.static("./public/scripts"));
    
    
    
    // SET VIEW ENGINE ----------------------------------------------------------
    /////////////////////////////////////////////////////////////////////////////
    
        app.set("view engine", "ejs");
        
        
        
        
        
        
        
// SETUP MONGO DB ---------------------------------------------------------------
// //////////////////////////////////////////////////////////////////////////////

    // CREATE MONGOOSE SCHEMA FOR UPLOAD ----------------------------------------
    // //////////////////////////////////////////////////////////////////////////

        // FOR REGISTER USERS ---------------------------------------------------
        // ----------------------------------------------------------------------

            const registerNeUserEntry = {

                username:String,                                            // 1
                userEmail:String,                                           // 2
                userCode:String,                                            // 3
                userinceptionDate:String,                                   // 4
                userinceptionTime:String                                    // 5

            }

        // FOR NUMBER PLATE INPUTS BY ADMIN -------------------------------------
        // ----------------------------------------------------------------------

            const plateEntrySchema = {

                plateNumber:String,                                         // 1
                provinceCode:String,                                        // 2
                carDescription:String,                                      // 3
                subDate:String,                                             // 4
                subTime:String,                                             // 5

            }

        // FOR NUMBE PLATE INPUTS BY USERS --------------------------------------
        // ----------------------------------------------------------------------

            const plateEntryByRegisteredUser = {

                
                userCode:String,                                            // 1
                plateNumber:String,                                         // 2
                provinceCode:String,                                        // 3
                carDescription:String,                                      // 4
                subDate:String,                                             // 5
                subTime:String,                                             // 6

            }

    // CREATE NEW PLATE ENRTY ---------------------------------------------------
    // //////////////////////////////////////////////////////////////////////////

        // MAKE DATE STAMPS -----------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            const timeDateInitiate = new Date()

                // CREATE DATE MARKERS ------------------------------------------
                // --------------------------------------------------------------

                    const month = timeDateInitiate.getMonth()
                    const year = timeDateInitiate.getFullYear()

                // CREATE MONTH MAP MARKERS -------------------------------------
                // --------------------------------------------------------------

                    const monthMapper = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

                // CREATE MONTH AND YEAR STRING ---------------------------------
                // --------------------------------------------------------------

                    var currentDateMarker = `${monthMapper[month]} ${year}`

        // CREATE ENTRY SUBMISSION MODELS ---------------------------------------
        // //////////////////////////////////////////////////////////////////////

            // FOR REGISTER NEW USER SUBMISSION ---------------------------------
            // //////////////////////////////////////////////////////////////////

                const newRegUserEntry = mongoose.model(`allRegisteredUsers`, registerNeUserEntry)

            // FOR SUBMISSIONS BY ADMIN -----------------------------------------
            // //////////////////////////////////////////////////////////////////

                const plateEntry = mongoose.model(`allplates`, plateEntrySchema)

            // FOR SUBMISSIONS BY REGISTERED USERS ------------------------------
            // //////////////////////////////////////////////////////////////////

                const regUserPlateEntry = mongoose.model(`allRegUserPlates`, plateEntryByRegisteredUser)








// SETUP ROUTES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// //////////////////////////////////////////////////////////////////////////////

    // SETUP ROUTES FOR DEFAULT HOME PATH ---------------------------------------
    // //////////////////////////////////////////////////////////////////////////

        // FOR INDEX HOME PAGE --------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            app.get("/", (req, res) => {

                // RENDER INDEX PAGE --------------------------------------------
                // --------------------------------------------------------------

                    res.render("inputPage", {

                    });

            });

        // FOR USER REGISTER PAGE -----------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            app.get("/register", (req, res) => {

                // RENDER INDEX PAGE --------------------------------------------
                // --------------------------------------------------------------

                    res.render("userRegisterPage", {

                    });

            });










    // SETUP ROUTES FOR OTHER PAGE ROUTES ---------------------------------------
    // //////////////////////////////////////////////////////////////////////////

        // SETUP GET PATHS ------------------------------------------------------
        // //////////////////////////////////////////////////////////////////////





        // SETUP POST PATHS -----------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            // FOR INPUT PAGE ---------------------------------------------------
            // //////////////////////////////////////////////////////////////////

                app.post("/", async (req, res) => {
                        
                        mongoose.connect(`${open}`)
                
                    // FUNCTION FOR ENTRY CREATION ------------------------------
                    // ----------------------------------------------------------

                        function createNewEntry () {

                            // CREATE NEW PLATE ENTRY -----------------------------------
                            // ----------------------------------------------------------

                                let newEntry = new plateEntry ({

                                    // ENTRY SUBMISSION ---------------------------------
                                    // --------------------------------------------------

                                        plateNumber:req.body.plateIntake,
                                        provinceCode:req.body.codeIntake,
                                        carDescription:req.body.descriptionIntake,
                                        subDate:req.body.dateIntake,
                                        subTime:req.body.timeIntake

                                })

                            // SAVE ENTRY TO MONGO DB -----------------------------------
                            // ----------------------------------------------------------

                                newEntry.save()

                        }
                
                    // CHECK IF ANY DUPLICATE ENTRIES ---------------------------
                    // ----------------------------------------------------------

                        try {

                            var plates = await plateEntry.findOne({plateNumber: req.body.plateIntake})

                            var arraysForUse = plates.plateNumber
                            var carType = plates.carDescription

                                // CHECK IF MATCH EXISTS ========================
                                // ==============================================

                                    if ( arraysForUse == req.body.plateIntake ) {

                                        console.log("match...")

                                        console.log(`${carType}`)



                                    }

                                    else if ( arraysForUse  == null || arraysForUse == undefined) {

                                        console.log("not match...")

                                    }

                                    else {

                                        // IF NO MATCHES THEN CREATE NEW ENTRY ==
                                        // ======================================

                                            createNewEntry()

                                    }

                        }


                        catch(error) {


                            console.log("SUMS: " + plates)

                            // CREATE NEW ENTRY AS NO MATCHES PRESENT ===========
                            // ==================================================

                                createNewEntry()

                            
                        }

                    // FINALLY RERENDER PAGE WHEN DONE --------------------------
                    // ----------------------------------------------------------

                        res.redirect("/")

                })

            









/////////////////////////////////////////////////////////////////////////////////
// OPEN PORT AND LISTEN ---------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////
        
    // PORT LISTEN --------------------------------------------------------------
    // //////////////////////////////////////////////////////////////////////////

        const port = process.env.PORT || 8082;


    // PORT LISTEN --------------------------------------------------------------
    // //////////////////////////////////////////////////////////////////////////

        app.listen(port, () => {

            console.log("server started at port: "  + port);

        });