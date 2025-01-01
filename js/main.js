//FAQ ACCORDION
document.addEventListener('DOMContentLoaded',function(){
    const faqContainer=document.querySelector('.faq-content');

    faqContainer.addEventListener('click',(e)=>{
       const groupHeader=e.target.closest('.faq-group-header');

       if(!groupHeader) return;
       console.log(groupHeader);

       const group=groupHeader.parentElement;

       const groupBody=group.querySelector('.faq-group-body');

       const icon=groupHeader.querySelector('i');

    //    Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    groupBody.classList.toggle('open'); 


    // close other FaA bodies
    const otherGroup=document.querySelectorAll('.faq-group');

    otherGroup.forEach((otherGroup  )=>{
if(otherGroup!==group){
    const otherGroupBody=otherGroup.querySelector('.faq-group-body');
    const otherIcon=otherGroup.querySelector('.faq-group-header i');


        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
}
    })

    });

});