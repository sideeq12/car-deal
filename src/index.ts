import {
    ViewerApp,
    AssetManagerPlugin,
    addBasePlugins,
    CanvasSnipperPlugin,
} from "webgi";
import "./styles.css";

// importing gsap and tweakpane and tweakpane
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {Pane} from 'tweakpane'
gsap.registerPlugin(ScrollTrigger)

// target the main container where everything scrolls to animate 'mainContainer'
ScrollTrigger.defaults({
    scroller : '.mainContainer'
})

//main function for a display processing, viewer, changing position, rotation etc
async function setupViewer(){
    const viewer = new ViewerApp({
        canvas: document.getElementById('webgi-canvas') as HTMLCanvasElement,
        useRgbm : false,
        isAntialiased : true,
    })

// dispaly scaling for our model
viewer.renderer.displayCanvasScaling = Math.min(window.devicePixelRatio, 1);


    // Add some plugins
    const manager = await viewer.addPlugin(AssetManagerPlugin)
    await addBasePlugins(viewer)

    // using importer to read our model import progress
    const importer  = manager.importer;
    importer?.addEventListener("onProgress", (ev)=>{
            const progress = ev.loaded/ev.total
            document.querySelector(".progress")?.setAttribute("style",`transform : scaleX(${progress})`)
    })

    importer?.addEventListener("onLoad", ()=>{ 
        introAnimation();
    })


    
     await viewer.addPlugin(CanvasSnipperPlugin)
    viewer.renderer.refreshPipeline()

    // Import and add a GLB file.
     await viewer.load("./assets/scene.glb")
    
    const model = await viewer.load("./assets/scene.glb")
   const Object3D = model.modelObject
   const modelPosition = Object3D.position;
   const modelRotation = Object3D.rotation;
   const modelSize = Object3D.scale;

   const loaderElement = document.querySelector('.loader') as HTMLDivElement
    function introAnimation(){
        const tl = gsap.timeline();
        tl.to('.loader',{
            x: '150%',
            duration : 0.8,
            ease : 'power4.inOut',
            delay : 1, 
            onComplete : setupScrollAnimation
     } )
    }

    function setupScrollAnimation(){
        document.body.removeChild(loaderElement)

    if(window.innerWidth > 900){
        const t2 = gsap.timeline()
        t2.to(modelPosition, {
            x : 0,
            y : -0.8,
            z : -0.2,
            scrollTrigger : {
                trigger : '.first',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelRotation, {
            x : 0.2,
            y : 0.4,
            z : -0.2,
            scrollTrigger : {
                trigger : '.first',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelSize, {
            x: 1.5,
            y : 1,
            z : 1,
            scrollTrigger : {
                trigger : '.first',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        })
        // second
         .to(modelRotation, {
            x : 0,
            y : 0,
            z : -1.570,
            scrollTrigger : {
                trigger : '.second',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelSize, {
            x: 0.9,
            y : 1,
            z : 1,
            scrollTrigger : {
                trigger : '.second',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        })

        // three
        .to(modelRotation, {
            x : 0,
            y : 2,
            z : 0,
            scrollTrigger : {
                trigger : '.third',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelPosition, {
            x : 1,
            y : -0.3,
            z : 1.4,
            scrollTrigger : {
                trigger : '.third',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        })

           // fourth
           .to(modelRotation, {
            x : 0,
            y : -0.2,
            z : 0,
            scrollTrigger : {
                trigger : '.fourth',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelPosition, {
            x : 2,
            y : 0,
            z : -1.8,
            scrollTrigger : {
                trigger : '.fourth',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelSize, {
            x: 2.5,
            y : 1,
            z : 1,
            scrollTrigger : {
                trigger : '.fourth',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        })

        // fifth
        t2.to(modelPosition, {
            x : 0,
            y : -0.8,
            z : -1.2,
            scrollTrigger : {
                trigger : '.fifth',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelRotation, {
            x : 0.2,
            y : 0.4,
            z : -0.2,
            scrollTrigger : {
                trigger : '.fifth',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelSize, {
            x: 1.5,
            y : 1,
            z : 1,
            scrollTrigger : {
                trigger : '.fifth',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        })

            // fourth
            .to(modelRotation, {
                x : 0,
                y : -1.5,
                z : 0,
                scrollTrigger : {
                    trigger : '.sixth',
                    start : 'top bottom',
                    end : 'top top',
                    scrub : 0.2,
                    immediateRender : false
                },
                onUpdate
            }).to(modelPosition, {
                x : 1,
                y : -0.3,
                z : 1.4,
                scrollTrigger : {
                    trigger : '.sixth',
                    start : 'top bottom',
                    end : 'top top',
                    scrub : 0.2,
                    immediateRender : false
                },
                onUpdate
            }).to(modelSize, {
                x: 0.8,
                y : 0.8,
                z : 0.8,
                scrollTrigger : {
                    trigger : '.sixth',
                    start : 'top bottom',
                    end : 'top top',
                    scrub : 0.2,
                    immediateRender : false
                },
                onUpdate
            })
    }else{
        const t2 = gsap.timeline()
        t2.to(modelPosition, {
            x : 0,
            y : -0.8,
            z : -0.2,
            scrollTrigger : {
                trigger : '.first',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelRotation, {
            x : 0.2,
            y : 0.4,
            z : -0.2,
            scrollTrigger : {
                trigger : '.first',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelSize, {
            x: 0.8,
            y : 0.5,
            z : 0.5,
            scrollTrigger : {
                trigger : '.first',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        })
        // second
         .to(modelRotation, {
            x : 0,
            y : 0,
            z : -1.570,
            scrollTrigger : {
                trigger : '.second',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelSize, {
            x: 0.4,
            y : 0.4,
            z : 0.4,
            scrollTrigger : {
                trigger : '.second',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelPosition, {
            x : 0,
            y : -0.5,
            z : 0,
            scrollTrigger : {
                trigger : '.first',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        })

        // three
        .to(modelRotation, {
            x : 0,
            y : 2,
            z : 0,
            scrollTrigger : {
                trigger : '.third',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelPosition, {
            x : 1,
            y : -0.7,
            z : 0.1,
            scrollTrigger : {
                trigger : '.third',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        })

           // fourth
           .to(modelRotation, {
            x : 0,
            y : -0.2,
            z : 0,
            scrollTrigger : {
                trigger : '.fourth',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelPosition, {
            x : 2,
            y : -0.5,
            z : -1.5,
            scrollTrigger : {
                trigger : '.fourth',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelSize, {
            x: 2.25,
            y : 0.9,
            z : 0.9,
            scrollTrigger : {
                trigger : '.fourth',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        })

        // fifth
        t2.to(modelPosition, {
            x : 0,
            y : -0.8,
            z : -1.2,
            scrollTrigger : {
                trigger : '.fifth',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelRotation, {
            x : 0.2,
            y : 0.4,
            z : -0.2,
            scrollTrigger : {
                trigger : '.fifth',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        }).to(modelSize, {
            x: 1.5,
            y : 1,
            z : 1,
            scrollTrigger : {
                trigger : '.fifth',
                start : 'top bottom',
                end : 'top top',
                scrub : 0.2,
                immediateRender : false
            },
            onUpdate
        })

            // fourth
            .to(modelRotation, {
                x : 0,
                y : -1.7,
                z : 0,
                scrollTrigger : {
                    trigger : '.sixth',
                    start : 'top bottom',
                    end : 'top top',
                    scrub : 0.2,
                    immediateRender : false
                },
                onUpdate
            }).to(modelPosition, {
                x : 1,
                y : -0.4,
                z : 0.1,
                scrollTrigger : {
                    trigger : '.sixth',
                    start : 'top bottom',
                    end : 'top top',
                    scrub : 0.2,
                    immediateRender : false
                },
                onUpdate
            }).to(modelSize, {
                x: 0.6,
                y : 0.6,
                z : 0.6,
                scrollTrigger : {
                    trigger : '.sixth',
                    start : 'top bottom',
                    end : 'top top',
                    scrub : 0.2,
                    immediateRender : false
                },
                onUpdate
            })
    }
    }
    const open = document.querySelector('.icon') as HTMLSpanElement
    open.addEventListener('click', ()=>{
        document.querySelector(".cover")?.setAttribute("style",`display : block`)
   
    })
    const close = document.querySelector('.close') as HTMLSpanElement
    close.addEventListener('click', ()=>{
        document.querySelector(".cover")?.setAttribute("style",`display : none`)
   
    })

    function onUpdate(){
     viewer.setDirty()
    }
}

setupViewer()
