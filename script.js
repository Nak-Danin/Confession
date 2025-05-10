window.onload = function(){
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".content").style.display = "block";
}
const YesBtn = document.querySelector(".Yes");
const NoBtn = document.querySelector(".No");
const Reconsider = document.querySelector(".Reconsider");
const Proposal = document.querySelector(".proposal");
const Agree = document.querySelector(".agreeContainer");
const Disagree = document.querySelector(".disagreeCartoon");
const happiAudio = document.querySelector(".happiAudio");
const sadAudio = document.querySelector(".sadAudio");
const Back = document.querySelector(".Goback");
function logReaction(reactionType){
    fetch('/api/reaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reaction: reactionType })
    });
}

YesBtn.addEventListener("click", ()=>{
    Agree.style.display = "block";
    Proposal.style.display = "none";
    happiAudio.play();  
    happiAudio.muted = false;
    logReaction("Yes");
})

Back.addEventListener("click",()=>{
    Proposal.style.display = "block";
    Agree.style.display = "none";
    happiAudio.pause();
})

NoBtn.addEventListener("click",()=>{
    Disagree.style.display = "block";
    Proposal.style.display = "none";
    happiAudio.pause();
    sadAudio.play();
    logReaction("No");
})

Reconsider.addEventListener("click",()=>{
    Proposal.style.display = "block";
    Disagree.style.display = "none";
    sadAudio.pause();
    happiAudio.pause();
})
