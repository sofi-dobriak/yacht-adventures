(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}})();const i=document.querySelector(".mobile-menu"),p=document.querySelector(".mobile-btn-open"),f=document.querySelector(".mobile-btn-close"),b=document.querySelectorAll(".mobile-link"),g=()=>{i.classList.toggle("is-open"),c()},c=()=>document.body.classList.toggle("is-scroll-disable"),d=()=>{i.classList.remove("is-open"),c()};p.addEventListener("click",g);f.addEventListener("click",d);b.forEach(o=>{o.addEventListener("click",d)});const v=document.querySelector(".modal-overlay"),a=document.querySelector(".form"),y=document.querySelector(".modal-btn-close"),L=()=>a.checkValidity(),w=o=>{o.preventDefault(),L()?u():alert("Будь ласка, заповніть усі поля правильно.")},u=()=>{v.classList.toggle("is-open")};a.addEventListener("submit",w);y.addEventListener("click",u);new Swiper(".swiper",{loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1280:{slidesPerView:3}},navigation:{nextEl:".slider-button.next",prevEl:".slider-button.prev"},pagination:{el:".pagination",bulletClass:"pagination-button",bulletActiveClass:"active"}});const l=document.querySelector(".back-top-link");window.addEventListener("scroll",()=>{window.scrollY>100?l.classList.add("show"):l.classList.remove("show")});l.addEventListener("click",o=>{o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map