import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <aside className=" flex flex-col bg-slate-50 w-52 h-screen rounded-r-3xl">
        {/* logo whats */}
      <div className="flex items-center  mt-10 ml-10"> 
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
            fill="#25D366"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.791 37.3526H24.7851C22.3966 37.3517 20.0497 36.7525 17.9653 35.6155L10.3999 37.6L12.4245 30.2049C11.1756 28.0406 10.5185 25.5855 10.5196 23.0703C10.5227 15.2017 16.9247 8.80005 24.7908 8.80005C28.6085 8.8017 32.1917 10.2879 34.8861 12.9855C37.5805 15.6829 39.0636 19.2684 39.062 23.0816C39.0589 30.9483 32.6594 37.3494 24.791 37.3526ZM18.3158 33.0319L18.7489 33.289C20.5701 34.3697 22.6577 34.9416 24.7862 34.9424H24.791C31.3287 34.9424 36.6498 29.6212 36.6524 23.0807C36.6537 19.9113 35.4211 16.9311 33.1816 14.689C30.9421 12.4469 27.9639 11.2116 24.7956 11.2105C18.2528 11.2105 12.9317 16.5312 12.9291 23.0711C12.9282 25.3124 13.5553 27.4952 14.7426 29.3837L15.0247 29.8325L13.8264 34.2096L18.3158 33.0319ZM31.4923 26.1541C31.741 26.2743 31.909 26.3555 31.9807 26.4752C32.0698 26.6239 32.0698 27.3378 31.7728 28.1709C31.4755 29.0038 30.051 29.764 29.3658 29.8664C28.7515 29.9582 27.974 29.9965 27.1199 29.7251C26.6019 29.5608 25.9378 29.3414 25.087 28.9739C21.7441 27.5305 19.4849 24.2904 19.058 23.6781C19.028 23.6352 19.0071 23.6052 18.9955 23.5896L18.9926 23.5858C18.8039 23.334 17.5394 21.6469 17.5394 19.9008C17.5394 18.2583 18.3463 17.3974 18.7176 17.0011C18.7431 16.9739 18.7665 16.9489 18.7874 16.9261C19.1143 16.5691 19.5006 16.4798 19.7383 16.4798C19.976 16.4798 20.214 16.482 20.4218 16.4924C20.4474 16.4937 20.4741 16.4936 20.5016 16.4934C20.7094 16.4922 20.9685 16.4907 21.2241 17.1046C21.3224 17.3408 21.4663 17.6911 21.618 18.0605C21.9248 18.8075 22.2639 19.6328 22.3235 19.7523C22.4127 19.9308 22.4721 20.1389 22.3532 20.377C22.3354 20.4127 22.3189 20.4464 22.3031 20.4786C22.2138 20.6608 22.1482 20.7949 21.9967 20.9718C21.9371 21.0414 21.8755 21.1164 21.8139 21.1914C21.6912 21.3408 21.5686 21.4902 21.4618 21.5966C21.2832 21.7744 21.0974 21.9673 21.3054 22.3243C21.5134 22.6813 22.2291 23.849 23.2891 24.7945C24.4287 25.8109 25.4191 26.2405 25.9211 26.4583C26.0191 26.5008 26.0985 26.5353 26.1568 26.5644C26.5132 26.743 26.7212 26.7131 26.9293 26.4752C27.1373 26.2372 27.8207 25.4339 28.0583 25.077C28.296 24.7201 28.5338 24.7796 28.8606 24.8985C29.1876 25.0176 30.9407 25.8802 31.2973 26.0586C31.3669 26.0935 31.432 26.125 31.4923 26.1541Z"
            fill="#FDFDFD"
          />
        </svg>
      </div>

      <div className="mt-10"> 
        

        <Link href="/dashboard" className="flex items-center flex-row text-textgreen mx-2 my-4 gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1L0 21C0 21.7956 0.31607 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23C24 22.7348 23.8946 22.4804 23.7071 22.2929C23.5196 22.1054 23.2652 22 23 22Z"
            fill="#25D366"
          />
          <path
            d="M15.0002 20.0007C15.2655 20.0007 15.5198 19.8954 15.7074 19.7078C15.8949 19.5203 16.0003 19.2659 16.0003 19.0007V12.0007C16.0003 11.7355 15.8949 11.4812 15.7074 11.2936C15.5198 11.1061 15.2655 11.0007 15.0002 11.0007C14.735 11.0007 14.4807 11.1061 14.2931 11.2936C14.1056 11.4812 14.0002 11.7355 14.0002 12.0007V19.0007C14.0002 19.2659 14.1056 19.5203 14.2931 19.7078C14.4807 19.8954 14.735 20.0007 15.0002 20.0007Z"
            fill="#25D366"
          />
          <path
            d="M7 20.0007C7.26521 20.0007 7.51957 19.8954 7.7071 19.7078C7.89464 19.5203 8 19.2659 8 19.0007V12.0007C8 11.7355 7.89464 11.4812 7.7071 11.2936C7.51957 11.1061 7.26521 11.0007 7 11.0007C6.73478 11.0007 6.48043 11.1061 6.29289 11.2936C6.10536 11.4812 6 11.7355 6 12.0007V19.0007C6 19.2659 6.10536 19.5203 6.29289 19.7078C6.48043 19.8954 6.73478 20.0007 7 20.0007Z"
            fill="#25D366"
          />
          <path
            d="M19 20C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8947 19.5196 20 19.2652 20 19V7C20 6.73478 19.8947 6.48043 19.7071 6.29289C19.5196 6.10536 19.2652 6 19 6C18.7348 6 18.4804 6.10536 18.2929 6.29289C18.1054 6.48043 18 6.73478 18 7V19C18 19.2652 18.1054 19.5196 18.2929 19.7071C18.4804 19.8946 18.7348 20 19 20Z"
            fill="#25D366"
          />
          <path
            d="M10.9998 20C11.265 20 11.5193 19.8946 11.7069 19.7071C11.8944 19.5196 11.9998 19.2652 11.9998 19V7C11.9998 6.73478 11.8944 6.48043 11.7069 6.29289C11.5193 6.10536 11.265 6 10.9998 6C10.7345 6 10.4802 6.10536 10.2927 6.29289C10.1051 6.48043 9.99976 6.73478 9.99976 7V19C9.99976 19.2652 10.1051 19.5196 10.2927 19.7071C10.4802 19.8946 10.7345 20 10.9998 20Z"
            fill="#25D366"
          />
        </svg>
            Dashboard
        </Link>
      </div>

      <Separator className="my-1 w-11 ml-3 " />


      <span className=" text-xs my-3 mx-4 text-slate-500">Ações</span>
      <div className="flex flex-col mx-2 mb-4 mt-2 gap-7">
        


        <Link href="#" className="flex flex-row gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_304_68)">
              <path
                d="M24 10V19C23.9984 20.3256 23.4711 21.5964 22.5338 22.5338C21.5964 23.4711 20.3256 23.9984 19 24H5C3.67441 23.9984 2.40356 23.4711 1.46622 22.5338C0.528882 21.5964 0.00158786 20.3256 0 19L0 8C0.00158786 6.67441 0.528882 5.40356 1.46622 4.46622C2.40356 3.52888 3.67441 3.00159 5 3H13C13.2652 3 13.5196 3.10536 13.7071 3.29289C13.8946 3.48043 14 3.73478 14 4C14 4.26522 13.8946 4.51957 13.7071 4.70711C13.5196 4.89464 13.2652 5 13 5H5C4.45621 5.0015 3.92312 5.15128 3.45812 5.43321C2.99311 5.71514 2.6138 6.11854 2.361 6.6L9.878 14.118C10.4417 14.6791 11.2047 14.9941 12 14.9941C12.7953 14.9941 13.5583 14.6791 14.122 14.118L17.943 10.3C18.1316 10.1178 18.3842 10.017 18.6464 10.0193C18.9086 10.0216 19.1594 10.1268 19.3448 10.3122C19.5302 10.4976 19.6354 10.7484 19.6377 11.0106C19.64 11.2728 19.5392 11.5254 19.357 11.714L15.536 15.536C14.5972 16.472 13.3257 16.9976 12 16.9976C10.6743 16.9976 9.40276 16.472 8.464 15.536L2 9.071V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V10C22 9.73478 22.1054 9.48043 22.2929 9.29289C22.4804 9.10536 22.7348 9 23 9C23.2652 9 23.5196 9.10536 23.7071 9.29289C23.8946 9.48043 24 9.73478 24 10ZM17 5H19V7C19 7.26522 19.1054 7.51957 19.2929 7.70711C19.4804 7.89464 19.7348 8 20 8C20.2652 8 20.5196 7.89464 20.7071 7.70711C20.8946 7.51957 21 7.26522 21 7V5H23C23.2652 5 23.5196 4.89464 23.7071 4.70711C23.8946 4.51957 24 4.26522 24 4C24 3.73478 23.8946 3.48043 23.7071 3.29289C23.5196 3.10536 23.2652 3 23 3H21V1C21 0.734784 20.8946 0.48043 20.7071 0.292893C20.5196 0.105357 20.2652 0 20 0C19.7348 0 19.4804 0.105357 19.2929 0.292893C19.1054 0.48043 19 0.734784 19 1V3H17C16.7348 3 16.4804 3.10536 16.2929 3.29289C16.1054 3.48043 16 3.73478 16 4C16 4.26522 16.1054 4.51957 16.2929 4.70711C16.4804 4.89464 16.7348 5 17 5Z"
                fill="#374957"
              />
            </g>
            <defs>
              <clipPath id="clip0_304_68">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Enviar mensagem
        </Link>

        <Link href="#" className="flex flex-row gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_304_71)">
              <path
                d="M23.2001 0.800232C22.8292 0.426245 22.3577 0.168144 21.8428 0.0573547C21.3279 -0.0534347 20.7919 -0.0121326 20.3001 0.176232L3.15508 6.92923C2.03471 7.37231 1.11314 8.20682 0.561427 9.27788C0.00971538 10.3489 -0.134665 11.5838 0.155085 12.7532C0.882117 15.407 2.28727 17.8259 4.23241 19.7721C6.17754 21.7183 8.59568 23.1248 11.2491 23.8532C12.4197 24.1412 13.6551 23.9949 14.7261 23.4416C15.7972 22.8884 16.6314 21.9656 17.0741 20.8442L23.8321 3.67223C24.0143 3.18347 24.0516 2.6525 23.9395 2.14305C23.8274 1.63361 23.5706 1.16735 23.2001 0.800232ZM11.7461 21.9112C9.43711 21.2775 7.33276 20.054 5.6398 18.3609C3.94684 16.6677 2.72353 14.5633 2.09008 12.2542C1.94401 11.6584 1.98736 11.0319 2.2141 10.462C2.44084 9.89197 2.83968 9.40688 3.35508 9.07423C3.45845 12.1099 4.71042 14.9932 6.85794 17.1413C9.00547 19.2894 11.8884 20.5421 14.9241 20.6462C14.5918 21.1615 14.107 21.5602 13.5374 21.787C12.9677 22.0137 12.3416 22.0572 11.7461 21.9112ZM15.7731 18.6842C9.58207 18.5842 5.41808 14.4192 5.31708 8.22723L21.0101 2.04723C21.1411 1.997 21.284 1.98633 21.4211 2.01655C21.5581 2.04677 21.6833 2.11655 21.7811 2.21723C21.8808 2.31051 21.9511 2.43094 21.9833 2.56367C22.0154 2.6964 22.008 2.83564 21.9621 2.96423L21.3001 4.64523C15.5421 2.66523 12.3581 10.8542 17.8871 13.3132L15.7731 18.6842ZM18.6201 11.4522C17.9929 11.1757 17.497 10.6673 17.2362 10.0334C16.9755 9.39947 16.9701 8.68926 17.2212 8.05147C17.4723 7.41369 17.9604 6.89778 18.5834 6.6118C19.2063 6.32581 19.9157 6.29192 20.5631 6.51723L18.6201 11.4522Z"
                fill="#374957"
              />
              <path
                d="M11 9C10.4696 9 9.96086 9.21071 9.58579 9.58579C9.21071 9.96086 9 10.4696 9 11C9 11.5304 9.21071 12.0391 9.58579 12.4142C9.96086 12.7893 10.4696 13 11 13C11.5304 13 12.0391 12.7893 12.4142 12.4142C12.7893 12.0391 13 11.5304 13 11C13 10.4696 12.7893 9.96086 12.4142 9.58579C12.0391 9.21071 11.5304 9 11 9Z"
                fill="#374957"
              />
            </g>
            <defs>
              <clipPath id="clip0_304_71">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Cardapio
        </Link>

        <Link href="#" className="flex flex-row gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 11.83C19.7348 11.83 19.4804 11.9354 19.2929 12.1229C19.1054 12.3104 19 12.5648 19 12.83V18.4C19 18.5591 18.9368 18.7117 18.8243 18.8243C18.7117 18.9368 18.5591 19 18.4 19H5.6C5.44087 19 5.28826 18.9368 5.17574 18.8243C5.06321 18.7117 5 18.5591 5 18.4V5.6C5 5.44087 5.06321 5.28826 5.17574 5.17574C5.28826 5.06321 5.44087 5 5.6 5H15.17C15.4352 5 15.6896 4.89464 15.8771 4.70711C16.0646 4.51957 16.17 4.26522 16.17 4C16.17 3.73478 16.0646 3.48043 15.8771 3.29289C15.6896 3.10536 15.4352 3 15.17 3H5.6C4.91125 3.00263 4.25146 3.27741 3.76443 3.76443C3.27741 4.25146 3.00263 4.91125 3 5.6V18.4C3.00263 19.0888 3.27741 19.7485 3.76443 20.2356C4.25146 20.7226 4.91125 20.9974 5.6 21H18.4C19.0888 20.9974 19.7485 20.7226 20.2356 20.2356C20.7226 19.7485 20.9974 19.0888 21 18.4V12.83C21 12.5648 20.8946 12.3104 20.7071 12.1229C20.5196 11.9354 20.2652 11.83 20 11.83Z"
              fill="#374957"
            />
            <path
              d="M10.72 11.0001C10.5323 10.8313 10.2878 10.7397 10.0354 10.7437C9.78308 10.7477 9.54158 10.847 9.35936 11.0216C9.17715 11.1962 9.0677 11.4333 9.05297 11.6853C9.03825 11.9372 9.11933 12.1854 9.27996 12.3801L11.5 14.7101C11.5929 14.8076 11.7046 14.8853 11.8283 14.9386C11.952 14.9918 12.0853 15.0195 12.22 15.0201C12.3539 15.0208 12.4867 14.9947 12.6104 14.9432C12.7341 14.8916 12.8462 14.8158 12.94 14.7201L19.72 7.72006C19.8119 7.62551 19.8843 7.51378 19.933 7.39124C19.9818 7.26871 20.0059 7.13778 20.004 7.00592C20.0022 6.87406 19.9744 6.74386 19.9222 6.62275C19.87 6.50163 19.7945 6.39199 19.7 6.30006C19.6054 6.20814 19.4937 6.13573 19.3711 6.08699C19.2486 6.03824 19.1177 6.01411 18.9858 6.01597C18.854 6.01783 18.7238 6.04564 18.6026 6.09781C18.4815 6.14999 18.3719 6.22551 18.28 6.32006L12.23 12.5801L10.72 11.0001Z"
              fill="#374957"
            />
          </svg>
          Pedidos
        </Link>
      </div>


      <Separator className="my-1 w-11 ml-3 " />


      <span className=" text-xs my-3 mx-4 text-slate-500">templates</span>
      <div className="flex flex-col mx-2 mb-4 mt-2 gap-7">


        <Link href="#" className="flex flex-row gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_304_91)">
              <path
                d="M22.8533 1.14795C22.1734 0.469151 21.252 0.0878906 20.2913 0.0878906C19.3305 0.0878906 18.4091 0.469151 17.7293 1.14795L1.46526 17.412C0.999511 17.8751 0.630221 18.426 0.378757 19.0327C0.127293 19.6395 -0.00135384 20.2901 0.000259122 20.947V23C0.000259122 23.2652 0.105616 23.5195 0.293152 23.7071C0.480689 23.8946 0.735043 24 1.00026 24H3.05326C3.71002 24.0018 4.36063 23.8734 4.96741 23.6221C5.5742 23.3708 6.12511 23.0016 6.58826 22.536L22.8533 6.27095C23.5318 5.59115 23.9128 4.66992 23.9128 3.70945C23.9128 2.74899 23.5318 1.82776 22.8533 1.14795ZM5.17426 21.122C4.61026 21.6822 3.84822 21.9977 3.05326 22H2.00026V20.947C1.99925 20.5529 2.07642 20.1625 2.2273 19.7984C2.37818 19.4343 2.59977 19.1038 2.87926 18.826L15.2223 6.48295L17.5223 8.78295L5.17426 21.122ZM21.4383 4.85695L18.9323 7.36395L16.6323 5.06895L19.1393 2.56195C19.2903 2.41126 19.4695 2.29179 19.6667 2.21036C19.8639 2.12893 20.0752 2.08714 20.2885 2.08738C20.5019 2.08761 20.7131 2.12986 20.9101 2.21172C21.1071 2.29357 21.2861 2.41343 21.4368 2.56445C21.5875 2.71547 21.7069 2.8947 21.7884 3.09189C21.8698 3.28908 21.9116 3.50038 21.9113 3.71372C21.9111 3.92706 21.8689 4.13827 21.787 4.33529C21.7051 4.5323 21.5853 4.71126 21.4343 4.86195L21.4383 4.85695Z"
                fill="#374957"
              />
            </g>
            <defs>
              <clipPath id="clip0_304_91">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Enviar mensagem{" "}
        </Link>

      </div>

      
      <Separator className="my-1 w-11" />


      <span className=" text-xs my-3 mx-4 text-slate-500"> suporte</span>
      <div className="flex flex-col mx-2 mb-4 mt-2 gap-7">

        <Link href="#" className="flex flex-row gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12.4238V10.9998C21 8.61281 20.0517 6.32362 18.3639 4.63579C16.6761 2.94797 14.3869 1.99976 12 1.99976C9.613 1.99976 7.32382 2.94797 5.63599 4.63579C3.94816 6.32362 2.99995 8.61281 2.99995 10.9998V12.4238C1.95111 12.8856 1.09275 13.6937 0.568572 14.7128C0.0443932 15.7319 -0.113788 16.9002 0.120508 18.022C0.354805 19.1438 0.967358 20.1511 1.85562 20.8752C2.74388 21.5993 3.85394 21.9963 4.99995 21.9998C5.53038 21.9998 6.03909 21.789 6.41416 21.414C6.78924 21.0389 6.99995 20.5302 6.99995 19.9998V13.9998C6.99995 13.4693 6.78924 12.9606 6.41416 12.5855C6.03909 12.2105 5.53038 11.9998 4.99995 11.9998V10.9998C4.99995 9.14324 5.73745 7.36276 7.0502 6.05001C8.36296 4.73725 10.1434 3.99976 12 3.99976C13.8565 3.99976 15.6369 4.73725 16.9497 6.05001C18.2625 7.36276 19 9.14324 19 10.9998V11.9998C18.4695 11.9998 17.9608 12.2105 17.5857 12.5855C17.2107 12.9606 17 13.4693 17 13.9998V19.9998H14C13.7347 19.9998 13.4804 20.1051 13.2928 20.2926C13.1053 20.4802 13 20.7345 13 20.9998C13 21.265 13.1053 21.5193 13.2928 21.7069C13.4804 21.8944 13.7347 21.9998 14 21.9998H19C20.146 21.9963 21.256 21.5993 22.1443 20.8752C23.0325 20.1511 23.6451 19.1438 23.8794 18.022C24.1137 16.9002 23.9555 15.7319 23.4313 14.7128C22.9071 13.6937 22.0488 12.8856 21 12.4238ZM4.99995 19.9998C4.2043 19.9998 3.44124 19.6837 2.87863 19.1211C2.31602 18.5585 1.99995 17.7954 1.99995 16.9998C1.99995 16.2041 2.31602 15.441 2.87863 14.8784C3.44124 14.3158 4.2043 13.9998 4.99995 13.9998V19.9998ZM19 19.9998V13.9998C19.7956 13.9998 20.5587 14.3158 21.1213 14.8784C21.6839 15.441 22 16.2041 22 16.9998C22 17.7954 21.6839 18.5585 21.1213 19.1211C20.5587 19.6837 19.7956 19.9998 19 19.9998Z"
              fill="#374957"
            />
          </svg>
          Suporte
        </Link>
      </div>


      <div className="flex flex-col justify-center items-center mx-2 mt-40 mb-4">
        <Button variant='config' className="flex, flex-row w-40 bg-backgroundhtml text-slate-800 gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8199 22H10.1799C9.71003 22 9.30347 21.673 9.20292 21.214L8.79592 19.33C8.25297 19.0921 7.73814 18.7946 7.26092 18.443L5.42392 19.028C4.97592 19.1709 4.4889 18.9823 4.25392 18.575L2.42992 15.424C2.19751 15.0165 2.27758 14.5025 2.62292 14.185L4.04792 12.885C3.98312 12.2961 3.98312 11.7019 4.04792 11.113L2.62292 9.816C2.27707 9.49837 2.19697 8.98372 2.42992 8.576L4.24992 5.423C4.48491 5.0157 4.97192 4.82714 5.41992 4.97L7.25692 5.555C7.50098 5.37416 7.75505 5.20722 8.01792 5.055C8.27026 4.91269 8.52995 4.78385 8.79592 4.669L9.20392 2.787C9.30399 2.32797 9.71011 2.00049 10.1799 2H13.8199C14.2897 2.00049 14.6958 2.32797 14.7959 2.787L15.2079 4.67C15.4887 4.79352 15.7622 4.93308 16.0269 5.088C16.2739 5.23081 16.5126 5.38739 16.7419 5.557L18.5799 4.972C19.0276 4.82967 19.514 5.01816 19.7489 5.425L21.5689 8.578C21.8013 8.98548 21.7213 9.49951 21.3759 9.817L19.9509 11.117C20.0157 11.7059 20.0157 12.3001 19.9509 12.889L21.3759 14.189C21.7213 14.5065 21.8013 15.0205 21.5689 15.428L19.7489 18.581C19.514 18.9878 19.0276 19.1763 18.5799 19.034L16.7419 18.449C16.5093 18.6203 16.2677 18.7789 16.0179 18.924C15.7557 19.0759 15.4853 19.2131 15.2079 19.335L14.7959 21.214C14.6954 21.6726 14.2894 21.9996 13.8199 22ZM7.61992 16.229L8.43992 16.829C8.62477 16.9652 8.81743 17.0904 9.01692 17.204C9.20462 17.3127 9.39788 17.4115 9.59592 17.5L10.5289 17.909L10.9859 20H13.0159L13.4729 17.908L14.4059 17.499C14.8132 17.3194 15.1998 17.0961 15.5589 16.833L16.3799 16.233L18.4209 16.883L19.4359 15.125L17.8529 13.682L17.9649 12.67C18.0141 12.2274 18.0141 11.7806 17.9649 11.338L17.8529 10.326L19.4369 8.88L18.4209 7.121L16.3799 7.771L15.5589 7.171C15.1997 6.90671 14.8132 6.68175 14.4059 6.5L13.4729 6.091L13.0159 4H10.9859L10.5269 6.092L9.59592 6.5C9.39772 6.58704 9.20444 6.68486 9.01692 6.793C8.81866 6.90633 8.62701 7.03086 8.44292 7.166L7.62192 7.766L5.58192 7.116L4.56492 8.88L6.14792 10.321L6.03592 11.334C5.98672 11.7766 5.98672 12.2234 6.03592 12.666L6.14792 13.678L4.56492 15.121L5.57992 16.879L7.61992 16.229ZM11.9959 16C9.78678 16 7.99592 14.2091 7.99592 12C7.99592 9.79086 9.78678 8 11.9959 8C14.2051 8 15.9959 9.79086 15.9959 12C15.9932 14.208 14.2039 15.9972 11.9959 16ZM11.9959 10C10.9033 10.0011 10.0138 10.8788 9.99815 11.9713C9.98249 13.0638 10.8465 13.9667 11.9386 13.9991C13.0307 14.0315 13.9468 13.1815 13.9959 12.09V12.49V12C13.9959 10.8954 13.1005 10 11.9959 10Z"
              fill="#2E3A59"
            />
          </svg>
          Configurações
        </Button>
      </div>
    </aside>
  );
}
