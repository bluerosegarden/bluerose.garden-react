import { Icon } from '@iconify/react';




export default function ButtonLink(props){

let prof_icons: {[id: string]:string} = {
    "github":"ant-design:github-filled",
    "email":"streamline:mail-send-envelope-solid",
    }



return (
<a className="group odd:bg-blue even:bg-rose rounded-lg items-center justify-center flex flex-col fill-white odd:hover:text-blue hover:bg-white odd:hover:fill-blue even:hover:fill-rose odd:hover:border-blue even:hover:border-rose border-transparent border-4 transition-all hover:ease-in-out p-6 w-30 transition-all hover:ease-in-out odd:hover:text-blue even:hover:text-rose text-white aspect-square grow-0 w-32 h-32" href={props.link} target="_blank">
        <Icon icon={prof_icons[props.icon]} height="60" width="60"  />
        <p className="invisible transition-all group-hover:ease-in-out group-hover:visible text-center text-base/3">
        {props.icon}
        </p>
</a>
)


}
