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

        // FOR USER CONTROL -----------------------------------------------------
        // ----------------------------------------------------------------------

            // SPAWNED USERS ----------------------------------------------------
            // ------------------------------------------------------------------

                const newlySpawnedUserProfile = {

                    spawnedUserStatusIndicator:String,                       // 1
                    spawnedUsername:String,                                  // 2
                    spawnedUserEmail:String,                                 // 3
                    spawnedUserCode:String,                                  // 4
                    spawnedUserinceptionDate:String,                         // 5
                    spawnedUserinceptionTime:String                          // 6

                }

            // ACTVATED USERS ---------------------------------------------------
            // ------------------------------------------------------------------

                const newlyActivatedUserProfile = {

                    activatedUserStatusIndicator:String,                     // 1
                    activatedUsername:String,                                // 2
                    activatedUserEmail:String,                               // 3
                    activatedUserCode:String,                                // 4
                    activatedUserinceptionDate:String,                       // 5
                    activatedUserinceptionTime:String                        // 6

                }

            // RELEASED USERS ---------------------------------------------------
            // ------------------------------------------------------------------

                const newlyReleasedUserProfile = {

                    releasedUserStatusIndicator:String,                      // 1
                    releasedUsername:String,                                 // 2
                    releasedUserEmail:String,                                // 3
                    releasedUserCode:String,                                 // 4
                    releasedUserinceptionDate:String,                        // 5
                    releasedUserinceptionTime:String                         // 6

                }

        // FOR NUMBER PLATE INPUTS BY ADMIN -------------------------------------
        // ----------------------------------------------------------------------

            const adminPlateEntrySchema = {

                plateNumber:String,                                          // 1
                provinceCode:String,                                         // 2
                carDescription:String,                                       // 3
                subDate:String,                                              // 4
                subTime:String,                                              // 5

            }

        // FOR NUMBE PLATE INPUTS BY USERS --------------------------------------
        // ----------------------------------------------------------------------

            const userPlateEntryByRegisteredUser = {

                
                userCode:String,                                             // 1
                plateNumber:String,                                          // 2
                provinceCode:String,                                         // 3
                carDescription:String,                                       // 4
                subDate:String,                                              // 5
                subTime:String,                                              // 6

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




        // CREATE USERS AND ENTRY SUBMISSION MODELS -----------------------------
        // //////////////////////////////////////////////////////////////////////

            // USER CONTROL -----------------------------------------------------
            // //////////////////////////////////////////////////////////////////

                // FOR NEWLY SPAWNED USER PROFILE -------------------------------
                // //////////////////////////////////////////////////////////////

                    const spawnedUserProfile = mongoose.model(`allSpawnedUsers`, newlySpawnedUserProfile)

                // FOR ACTIVE USER PROFILE --------------------------------------
                // //////////////////////////////////////////////////////////////

                    const activatedUserProfile = mongoose.model(`allActiveUsers`, newlyActivatedUserProfile)

                // FOR RELEASED USER PROFILE ------------------------------------
                // //////////////////////////////////////////////////////////////

                    const releasedUserProfile = mongoose.model(`allReleasedUsers`, newlyReleasedUserProfile)



            // PLATE ENTRY SUBMISSIONS CONTROL ----------------------------------
            // //////////////////////////////////////////////////////////////////

                // FOR PLATE ENTRY SUBMISSIONS BY ADMIN -------------------------
                // //////////////////////////////////////////////////////////////

                    const adminPlateEntry = mongoose.model(`allplates`, adminPlateEntrySchema)

                // FOR PLATE ENTRY SUBMISSIONS BY REGISTERED USERS -------------
                // /////////////////////////////////////////////////////////////

                    const activeUserPlateEntry = mongoose.model(`allRegUserPlates`, userPlateEntryByRegisteredUser)








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

                                let newEntry = new adminPlateEntry ({

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

                            var plates = await adminPlateEntry.findOne({plateNumber: req.body.plateIntake})

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

            // FOR INPUT PAGE ---------------------------------------------------
            // //////////////////////////////////////////////////////////////////

                app.post("/register", async (req, res) => {
                        
                        mongoose.connect(`${open}`)
                
                    // FUNCTION FOR GHOST CREATION ------------------------------
                    // ----------------------------------------------------------

                        function createNewGhost () {

                            // CREATE NEW GHOST ENTRY -----------------------------------
                            // ----------------------------------------------------------

                                let newGhost = new spawnedUserProfile ({

                                    // GHOST SUBMISSION ---------------------------------
                                    // --------------------------------------------------

                                        spawnedUserStatusIndicator:"spawned",
                                        spawnedUsername:req.body.ghostNameIntake,
                                        spawnedUserEmail:req.body.ghostEmailIntake,
                                        spawnedUserCode:req.body.ghostCodeIntake,
                                        spawnedUserinceptionDate:req.body.dateIntake,
                                        spawnedUserinceptionTime:req.body.timeIntake

                                })

                            // SAVE GHOST TO MONGO DB -----------------------------------
                            // ----------------------------------------------------------

                                newGhost.save()

                        }
                
                    // CHECK IF ANY DUPLICATE GHOSTS ----------------------------
                    // ----------------------------------------------------------

                        try {

                            var ghosts = await spawnedUserProfile.findOne({spawnedUserEmail: req.body.ghostEmailIntake})

                            var arraysForUse = ghosts.plateNumber
                            var ghostMail = ghosts.carDescription

                                // CHECK IF MATCH EXISTS ========================
                                // ==============================================

                                    if ( arraysForUse == req.body.ghostEmailIntake ) {

                                        console.log("ghost match...")

                                        console.log(`${ghostMail}`)



                                    }

                                    else if ( arraysForUse  == null || arraysForUse == undefined) {

                                        console.log("ghost not match...")

                                    }

                                    else {

                                        // IF NO MATCHES THEN CREATE NEW GHOST ==
                                        // ======================================

                                            createNewGhost()

                                    }

                        }


                        catch(error) {


                            console.log("KOS: " + ghosts)

                            // CREATE NEW ENTRY AS NO MATCHES PRESENT ===========
                            // ==================================================

                                createNewGhost()

                            
                        }

                    // FINALLY RERENDER PAGE WHEN DONE --------------------------
                    // ----------------------------------------------------------

                        res.redirect("/register")

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