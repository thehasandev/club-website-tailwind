const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        topUp: "52px",
      },
      animation: {
        one: "gure 2s linear forwards alternate infinite",
        two: "Updown 1s linear forwards alternate infinite",
        three: "rightLeft 2s linear forwards alternate infinite",
        four: "toUp 1s linear forwards alternate infinite",
        five: "arry 4s linear forwards alternate infinite",
        six: "harry 2s linear forwards alternate infinite",
        saven: "hasan 4s linear forwards alternate infinite",
        eight: "last 3s linear forwards alternate infinite",
      },
      keyframes: {
        gure: {
          form: {
            top: "30px",
          },
          to: {
            top: "50px",
          },
        },
        Updown: {
          form: {
            top: "30px",
          },
          to: {
            top: "100px",
          },
        },

        rightLeft: {
          form: {
          right:"46px",
          bottom:"10px",
          },
          to: {
            right:"100px",
            bottom:"200px",
            opacity:"0",
          },
        },

        
        toUp: {
          form: {
          top:"50px",
          right:"38px",
          },
          to: {
            top:"80px",
            right:"38px",
          }, 
        },

        arry: {
          form: {
          top:"193px",
          left:"25px",
          },
          to: {
            top:"50px",
          left:"190px",
          }, 
        },


        harry: {
          form: {
          top:"243px",
          left:"200px",
          },
          to: {
            top:"200px",
            left:"30px",
            opacity:"0",
          }, 
        },

        hasan: {
          form: {
          bottom:"50px",
          right:"250px",
          },
          to: {
            bottom:"40px",
            right:"800px",
            opacity:"0",
          }, 
        },

        last: {
          form: {
          top:"23px",
          left:"100px",
          },
          to: {
            top:"150px",
            left:"-10px",
            opacity:"0",
          }, 
        },


      },
      },
 
  },
  plugins: [require("limbcss")],
};
