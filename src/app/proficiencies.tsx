import { Icon } from '@iconify/react';



function Proficiency({prof}:{prof:string}){

const prof_icons: {[id: string]:string} = {
    "html":"ph:file-html-fill",
    "css":"ph:file-css-fill",
    "linux":"mingcute:linux-fill",
    "rust":"tabler:brand-rust",
    "python":"akar-icons:python-fill",
    "git":"mdi:git",
    "javascript":"fluent:javascript-24-filled",
    "webserver":"solar:server-path-bold-duotone",
    "c++":"ph:file-cpp-fill",
    }



return (
<>
<div className="group odd:bg-blue even:bg-rose rounded-lg items-center justify-center flex flex-col fill-white odd:hover:text-blue  hover:bg-white odd:hover:fill-blue even:hover:fill-rose odd:hover:border-blue even:hover:border-rose border-transparent border-4 transition-all hover:ease-in-out p-6 w-30 transition-all hover:ease-in-out odd:hover:text-blue even:hover:text-rose text-white aspect-square w-32 h-32">
        <Icon icon={prof_icons[prof]} height="60" width="60"  />
        <p className="invisible transition-all group-hover:ease-in-out group-hover:visible text-center text-base/3">
        {prof}
        </p>
</div>
</>
)


}


export default function Proficiencies(){
const proficiencies = [
  "html",
  "css",
  "linux",
  "rust",
  "python",
  "git",
  "javascript",
  "webserver",
  "c++",
 // "",
];


return (
<>
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row">

      <div className="flex flex-row flex-wrap gap-2 justify-center order-first lg:order-none mb-5">
        {proficiencies.map((prof, index)=>(
            <Proficiency prof={prof} key={index} />
        ))}
        </div>
    <div className="mt-10 mx-5 text-center lg:text-left">
        <p className="lg:text-2xl"> Here&apos;s a small list of things I&apos;m proficient in!</p>

    </div>

    </div>
</>
)

};
