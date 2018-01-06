const faqList = [
  ["What is Backbone PLM?",
   "Backbone’s all-in-one solution is helping consumer goods companies get more done with less tools. From managing the milestone calendar, creating tech packs, iterating on designs, tracking factory communication, sample phases, approvals and cancellations, time and action, purchase orders, all through to the end product. Backbone fully ecompasses the product development process allowing your entire team to collaborate seamlessly."
  ],
  ["What is PLM?",
   "Product lifecycle management is a system of processes strategically aimed to reduce a product's time to market while reducing production and development costs. PLM tools are used to manage and connect data, designs and business systems in the production process from the first design to the final product. Through more effective collaboration between parties involved in the production process, PLM helps to improve product quality and spur innovation."
  ],
  ["What problem does Backbone PLM solve?",
   "With increasing consumer demands, time to market is more important than ever. Backbone increases speed to market while reducing time spent iterating. Backbone increases cross-functional visibility, breaking down the walls between disconnected data. Backbone patches up the porous data infrastructure that comes with a fragmented workflow from the use of too many individualized solutions. Backbone removes ambiguity around product status. Thus, making clear each phase of the product development process each product is currently in. Backbone automates many of the smaller tasks that can inundate a collaborator. Backbone creates a standard, that can scale, while allowing flexibility to support a wide variety of business-types, and unique work flows."
  ],
  ["How does Backbone PLM differ from other PLMs?",
   "Backbone is a next-generation solution that works the way product companies want to. It’s designed at the core to be highly user-centric. This means, each user’s experience is role-focused. Users only see what relates to their functions without being overwhelmed with aspects of the app that do not concern them. Backbone has the most flexible control panel, behind the scenes, allowing for autonomy in managing all aspects of a brand’s ecosystem. This means, companies can make foundational updates without having to pay additionally for system modifications. Backbone is compatible with all files types and supports massive file uploads. Backbone is truly end-to-end. Product companies can manage their entire workflow without needing individual solutions to fill gaps. Backbone is turn-key. By offering more out-of-the-box, we actually reduce the cost of implementing a PLM, by greatly reducing the roll out time. This means, our customers can get up and running faster, and feel a true, immediate ROI."
  ],
  ["Can my vendors use Backbone PLM?",
   "Vendors can use Backbone in two ways. You can add them as full-access users with editing rights. You can set permissions to define what they can and can’t edit. Vendors can also be added as guest users which will give them read-only access. With read-only access they can still view product data but can not make any edits in the system."
  ],
  ["Does Backbone PLM work internationally?",
   "Backbone can be accessed anywhere across the globe and only requires internet access in order to use the platform."
  ],
  ["How long does it take for my company to get up and running?",
   "Onboarding onto Backbone takes a fraction of the time than implementing onto traditional systems. Account set-up is quick, and we have an entire client-success team who’s there to help. Data is immediately ready to be added. Backbone also offers historical data uploading for faster foundational data importing."
  ],
  ["Does Backbone offer support?",
   "Backbone has an entire team dedicated to supporting our clients and each brand is provided with a Client Success Representative. Backbone also has an online help center with FAQs and downloadable help documents as well as an online chat portal where users can communicate with our Client Success Department during business hours. Lastly, we provide a support email and telephone number to contact us 24 hours a day."
  ],
  ["Does Backbone offer training? Is it included?",
   "Unlimited training and full onboarding is provided for every client. We are constantly sending out quick-tips, work-hacks, and how-to’s."
  ],
  ["How will I get my company’s data imported into your system?",
   "During the sales process our team will identify the scope of your company’s data import needs. We have a fully-automated data imported to get foundational information into the system at once."
  ],
  ["How many users can I have?",
   "Backbone offers companies unlimited amount of user per account. Pricing may vary so please inquire within."
  ],
  ["Storage?",
   "Backbone offers unlimited file storage. *Note, this may change*"
  ],
  ["File size upload?",
   "Backbone allows for up to 1GB per file upload."
  ],
  ["What kind of files are compatible?",
   "Backbone allows for the following files to be uploaded into our system: AI, PSD, PDF, JPEG, PNG, CAD, XLS, 3D file types, movie files, we are constantly adding compatibility with new file types."
  ],
  ["What are Backbone’s policies regarding privacy?",
   "Please view our privacy policy here."
  ],
  ["What are Backbone’s policies regarding security?",
   "TBD"
  ],
  // ["",
  //  ""
  // ],
  // ["",
  //  ""
  // ],
  // ["",
  //  ""
  // ],

];

$(function() {
      const el = $('.faq-question-list');
      el.empty();

      for (let i = 0; i < faqList.length; i++) {
        var currentDiv = $(`<div class="faq-single-question-container">
          <div class="faq-single-question-title">
            <div class="faq-question-tri">
              <img src="assets/images/faq_tri.svg">
            </div>
            <div class="faq-question-title">
              ${faqList[i][0]}
            </div>
          </div>
          <div class="faq-single-question-answer">
            ${faqList[i][1]}
          </div>
        </div>`);

        currentDiv.click(function(e) {
          $(".faq-single-question-answer").css("display","none");
          $(".faq-question-tri").css("transform", "none");


          $(this).find(".faq-single-question-answer").css("display","flex");
          $(this).find(".faq-question-tri").css("transform", "rotate(-90deg)");
        });
        el.append(currentDiv);
      }
});


$(function() {
      const el = $('.faq-question-list-desktop');
      el.empty();

      for (let i = 0; i < faqList.length; i++) {
        var currentDiv = $(
          `<div class="faq-single-question-title-desktop">
            ${faqList[i][0]}
            <div class="faq-single-anwer-title-desktop">
              ${faqList[i][1]}
            </div>
          </div>`
          );




        currentDiv.click(function(e) {

          var question = $(this)
                          .clone()
                          .children()
                          .remove()
                          .end()
                          .text();

          var answer = $(this).find(".faq-single-anwer-title-desktop").text();

          $(".faq-single-question-title-desktop").removeClass("selected-question");

          $(".faq-answer-desktop-title").text(question);
          $(".faq-answer-desktop-text").text(answer);

          $(this).addClass("selected-question");

        });
        el.append(currentDiv);
      }
});
