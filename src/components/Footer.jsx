import logo from '../assets/logo.png'
import group from '../assets/group.png'
 
function Footer() {
  return (
    <div className='bg-[#2C3E50] w-full h-[32rem] flex flex-col'>
       
        <div className='flex flex-row space-x-[1.26rem] items-center justify-center mt-[3.86rem]'>
            <img src={logo} className='w-[4.308rem] h-[4.308rem]' alt="" />
            <img src={group} className='w-[4.18656rem] h-[3.039rem]' alt="" />
        </div>

        <div className='flex flex-col space-y-[3.97rem] items-center mt-[4.05rem] text-center'>
                <div className=''>
                        <div className="w-[5.29744rem] h-[1.229rem] text-orange-500 text-[0.75006rem] font-bold font-title leading-normal mb-[0.43rem]">Socials</div>
                        <div className="w-[5.29744rem] h-[1.229rem] text-white text-[0.64288rem] font-normal font-title leading-normal">Instagram</div>
                        <div className="w-[5.29744rem] h-[1.229rem] text-white text-[0.64288rem] font-normal font-title leading-normal">Facebook</div>
                        <div className="w-[5.29744rem] h-[1.229rem] text-white text-[0.64288rem] font-normal font-title leading-normal">Twitter</div>
                        <div className="w-[5.29744rem] h-[1.229rem] text-white text-[0.64288rem] font-normal font-title leading-normal">Linkedin</div>
                </div>

                <div className=''>
                        <div className="w-[6.54175rem] h-[0.92544rem] text-orange-500 text-[0.75006rem] font-bold font-title leading-normal mb-[1rem]">Connect With Us</div>
                        <div className="w-[6.54175rem] h-[1.229rem] text-white text-[0.64288rem] font-normal font-title leading-normal">+91 9546898080</div>
                        <div className="w-[6.54175rem] h-[0.92544rem] text-white text-[0.64288rem] font-normal font-title leading-normal">brightlayersmail.com</div>                
                </div>
                
                <div className='w-[9.69694rem] h-[0.53575rem] text-[0.44675rem] font-normal leading-normal font-title items-center text-white'>
                    Copyright @TheBrightLayers
                </div>
        </div>

       
    </div>
  )
}

export default Footer


// //   <div className="w-full h-[34.07319rem]
// md:w-full md:h-[24rem] flex flex-col bg-[#2C3E50] mt-[9.28rem]">
        
// <div className='w-full justify-center my-auto flex flex-col mt-[3.86rem]
//  md:flex-row '> 
//     <div className='flex flex-row items-center justify-center
//                      md:px-24 md:gap-12 md:h-[15rem] gap-[1.26rem]'>
//         <div className='w-[4.308rem] h-[4.308rem] justify-center 
//                         md:w-[8.4375rem] md:h-[8.4375rem]'><img src={logo} alt="" />
//         </div>
//         <div>
//         <svg className='w-[4.18656rem]'
//          xmlns="http://www.w3.org/2000/svg" width="132" height="96" viewBox="0 0 132 96" fill="none">
//             <path d="M76.0839 45.5838C77.6038 45.5838 79.1237 45.6003 80.6381 45.5728C81.2384 45.5618 81.4917 45.7984 81.4697 46.3816C81.365 49.3415 80.6271 52.0649 78.3968 54.183C76.8824 55.6135 75.0596 56.3727 72.989 56.6423C71.045 56.8954 69.1727 56.7028 67.3774 55.9601C64.2219 54.6617 62.3771 52.2464 61.7383 48.9509C61.3198 46.8052 61.474 44.654 62.3826 42.6294C63.7924 39.4769 66.265 37.6888 69.6518 37.1331C71.7169 36.7975 73.7269 37.0066 75.6598 37.7934C78.0939 38.7837 79.8451 40.4672 80.7593 42.976C80.9685 43.5482 80.8143 43.7077 80.2306 43.6912C79.0851 43.6582 77.9397 43.6747 76.7943 43.6857C76.4583 43.6857 76.2381 43.5812 76.0398 43.2786C75.0816 41.8481 73.6939 41.1604 71.9977 41.0394C70.2355 40.9128 68.666 41.386 67.46 42.6954C66.1989 44.0598 65.7914 45.7159 65.9731 47.5589C66.0778 48.6373 66.3972 49.6111 67.025 50.4914C68.3081 52.2849 70.1419 52.8626 72.2235 52.6865C74.2005 52.5215 75.6929 51.5312 76.5189 49.6661C76.8053 49.0224 76.7722 48.9619 76.0784 48.9564C74.5144 48.9564 72.9504 48.9399 71.392 48.9619C70.8908 48.9674 70.6705 48.8078 70.6926 48.2852C70.7256 47.625 70.7311 46.9647 70.6926 46.3045C70.654 45.6993 70.9184 45.5563 71.4691 45.5673C73.011 45.5948 74.5529 45.5783 76.0894 45.5783L76.0839 45.5838Z" fill="white"/>
//             <path d="M12.699 46.6018C14.0372 47.251 14.8963 48.2303 15.2597 49.6002C16.0527 52.5987 14.3841 55.289 11.2452 56.0758C10.5017 56.2628 9.74728 56.3673 8.97081 56.3673C6.24487 56.3508 3.51343 56.3453 0.787496 56.3673C0.176226 56.3728 0 56.1693 0 55.5696C0.0165208 49.7653 0.0165208 43.9609 0 38.1566C0 37.5294 0.231292 37.3809 0.80952 37.3864C3.64559 37.4084 6.48718 37.3368 9.32325 37.4194C11.3553 37.4799 13.1671 38.1731 14.2685 40.0382C15.3974 41.9638 15.0945 44.9017 12.7045 46.6018H12.699ZM6.80658 52.8462C7.46741 52.8462 8.12273 52.8627 8.78356 52.8462C9.95654 52.8187 10.8321 52.021 10.9643 50.8876C11.0965 49.7653 10.4136 48.7694 9.23514 48.5549C7.71522 48.2798 6.17328 48.4724 4.64235 48.4558C4.29542 48.4558 4.31744 48.7474 4.31193 48.9895C4.31193 50.0844 4.32295 51.1847 4.30643 52.2796C4.30092 52.7142 4.47714 52.8627 4.89567 52.8517C5.53447 52.8297 6.16777 52.8517 6.80658 52.8517V52.8462ZM6.71846 40.913C6.10169 40.913 5.48491 40.924 4.87364 40.913C4.48816 40.902 4.31193 41.0395 4.31744 41.4466C4.33396 42.481 4.32845 43.5153 4.31744 44.5441C4.31744 44.9017 4.4441 45.0668 4.81857 45.0668C6.00807 45.0558 7.19757 45.0998 8.38156 45.0503C9.63714 45.0008 10.4962 44.0545 10.4467 42.8606C10.4026 41.7272 9.53802 40.935 8.30446 40.9185C7.7758 40.913 7.24713 40.9185 6.71846 40.9185V40.913Z" fill="white"/>
//             <path d="M24.0542 46.8109C24.0542 43.972 24.0542 41.1331 24.0542 38.2997C24.0542 37.4084 24.0542 37.4029 24.9133 37.4029C27.6006 37.4029 30.288 37.3314 32.9699 37.4194C35.8941 37.5184 38.3447 39.0314 39.1156 42.0574C39.804 44.7697 39.022 48.1643 36.1144 49.5672C35.7729 49.7323 35.8115 49.8918 35.9822 50.1779C37.034 51.9 38.0693 53.633 39.0936 55.3661C39.2533 55.6356 39.6113 55.9437 39.4516 56.2243C39.2864 56.5159 38.8458 56.3509 38.5264 56.3564C37.425 56.3729 36.3236 56.3454 35.2222 56.3674C34.7817 56.3784 34.5119 56.2573 34.2861 55.8392C33.405 54.2217 32.4688 52.6372 31.5656 51.0307C31.3123 50.5796 30.9929 50.4035 30.4532 50.409C28.4818 50.431 28.4818 50.409 28.4818 52.3731C28.4818 53.4955 28.4707 54.6178 28.4818 55.7402C28.4873 56.1858 28.3331 56.3784 27.8705 56.3674C26.8131 56.3454 25.7558 56.3399 24.6985 56.3674C24.1588 56.3839 24.0266 56.1473 24.0321 55.6577C24.0487 52.7087 24.0377 49.7598 24.0377 46.8164L24.0542 46.8109ZM28.3606 43.9335C28.3606 44.7037 28.3606 45.4739 28.3606 46.2442C28.3606 46.4973 28.3716 46.7724 28.713 46.7613C30.1173 46.7228 31.5326 46.9484 32.9203 46.6128C34.2475 46.2937 35.0185 45.0613 34.8808 43.5813C34.7541 42.2224 33.7959 41.2431 32.4302 41.1826C31.2462 41.1331 30.0512 41.1771 28.8617 41.1661C28.4928 41.1661 28.3496 41.3201 28.3551 41.6832C28.3661 42.4315 28.3551 43.1797 28.3551 43.928L28.3606 43.9335Z" fill="white"/>
//             <path d="M92.9389 85.3449C92.9389 82.462 92.9554 79.579 92.9279 76.7016C92.9224 76.0854 93.0931 75.8544 93.7429 75.8654C96.4523 75.8984 99.1617 75.8049 101.866 75.8984C104.801 76.0029 107.24 77.5159 108.006 80.5419C108.689 83.2432 107.923 86.6323 104.999 88.0517C104.652 88.2223 104.707 88.3873 104.878 88.6624C105.913 90.368 106.932 92.0845 107.956 93.7955C108.022 93.9111 108.094 94.0211 108.16 94.1366C108.535 94.8078 108.518 94.8354 107.747 94.8409C106.491 94.8409 105.236 94.8409 103.98 94.8409C103.677 94.8409 103.441 94.7858 103.275 94.4832C102.389 92.8932 101.469 91.3253 100.588 89.7297C100.28 89.1686 99.9492 88.8495 99.2168 88.8715C97.3885 88.9375 97.383 88.8935 97.383 90.7201C97.383 91.8864 97.372 93.0528 97.383 94.2192C97.3885 94.6703 97.2233 94.8519 96.7662 94.8409C95.7309 94.8244 94.6956 94.8078 93.6603 94.8464C93.049 94.8684 92.9279 94.5988 92.9334 94.0596C92.9499 91.1547 92.9444 88.2498 92.9444 85.3504L92.9389 85.3449ZM97.2453 82.4455C97.2453 83.1937 97.2453 83.9419 97.2453 84.6902C97.2453 84.9707 97.2618 85.2513 97.6418 85.2348C99.024 85.1908 100.417 85.4109 101.783 85.0863C103.138 84.7617 103.931 83.4963 103.766 82.0108C103.611 80.6244 102.609 79.6836 101.21 79.6506C100.087 79.6231 98.9635 79.6616 97.84 79.6341C97.3664 79.6231 97.2233 79.8211 97.2398 80.2613C97.2618 80.9875 97.2453 81.7137 97.2453 82.4399V82.4455Z" fill="white"/>
//             <path d="M40.786 9.49034C40.786 12.3732 40.764 15.2562 40.8026 18.1391C40.8081 18.8158 40.5933 19.0248 39.9325 18.9918C39.0128 18.9423 38.0821 18.9588 37.157 18.9918C36.6338 19.0083 36.4686 18.8103 36.4741 18.2986C36.4906 16.208 36.4631 14.1173 36.4906 12.0266C36.4961 11.471 36.3089 11.3059 35.7692 11.3169C33.8087 11.3444 31.8483 11.3499 29.8933 11.3169C29.2986 11.3059 29.1444 11.515 29.1499 12.0817C29.1774 14.1063 29.1334 16.1309 29.1774 18.1556C29.1939 18.8433 28.9516 19.0303 28.3018 19.0028C27.3326 18.9588 26.3634 18.9753 25.3941 18.9973C24.9316 19.0083 24.7168 18.8708 24.7168 18.3646C24.7278 12.4668 24.7278 6.56892 24.7168 0.671056C24.7168 0.181402 24.8985 0.0108481 25.3776 0.0218515C26.4129 0.0438585 27.4482 0.0493602 28.4835 0.0218515C29.0067 0.00534633 29.1719 0.203409 29.1664 0.71507C29.1444 2.67369 29.1774 4.63231 29.1499 6.59092C29.1444 7.1466 29.3316 7.31165 29.8713 7.30065C31.8318 7.27314 33.7922 7.26764 35.7472 7.30065C36.3419 7.31165 36.4961 7.10258 36.4906 6.53591C36.4631 4.64331 36.5071 2.75071 36.4631 0.858115C36.4466 0.170398 36.6889 -0.0221623 37.3387 0.0108481C38.2363 0.054862 39.145 0.054862 40.0481 0.0108481C40.6429 -0.0166606 40.7971 0.214412 40.7971 0.781091C40.775 3.68601 40.786 6.59092 40.786 9.49584V9.49034Z" fill="white"/>
//             <path d="M89.9835 46.8547C89.9835 43.9718 90.0001 41.0889 89.9725 38.206C89.967 37.5623 90.1763 37.3587 90.8041 37.3862C91.7953 37.4302 92.7866 37.4137 93.7778 37.3862C94.2679 37.3752 94.4331 37.5623 94.4276 38.0464C94.4111 40.005 94.4386 41.9636 94.4111 43.9223C94.4001 44.5109 94.5928 44.676 95.1711 44.6705C97.1315 44.643 99.092 44.643 101.047 44.6705C101.609 44.676 101.763 44.4724 101.752 43.9443C101.73 42.0517 101.741 40.1591 101.741 38.2665C101.741 37.4027 101.741 37.4027 102.633 37.3972C103.536 37.3972 104.439 37.4137 105.342 37.3917C105.832 37.3807 106.058 37.5182 106.053 38.0574C106.042 43.9333 106.042 49.8091 106.053 55.685C106.053 56.2076 105.866 56.3837 105.359 56.3672C104.39 56.3397 103.42 56.3342 102.451 56.3672C101.901 56.3837 101.724 56.1801 101.73 55.641C101.752 53.5723 101.719 51.5037 101.752 49.435C101.763 48.8463 101.57 48.6813 100.992 48.6868C99.0314 48.7143 97.071 48.7143 95.116 48.6868C94.5543 48.6813 94.4056 48.8848 94.4111 49.413C94.4331 51.4376 94.4221 53.4623 94.4221 55.4869C94.4221 56.3507 94.4221 56.3507 93.53 56.3562C92.5828 56.3562 91.6356 56.3342 90.6884 56.3672C90.1322 56.3892 89.9725 56.1636 89.9725 55.6355C89.989 52.7085 89.9835 49.7816 89.9835 46.8547Z" fill="white"/>
//             <path d="M118.37 88.6786C118.502 88.6786 118.634 88.6896 118.766 88.6786C119.752 88.5686 120.578 88.5851 120.749 89.911C120.842 90.6428 121.547 91.0444 122.225 91.303C123.216 91.6826 124.246 91.7046 125.264 91.4075C126.03 91.1874 126.603 90.7253 126.751 89.9C126.884 89.1683 126.437 88.3705 125.672 87.9469C124.681 87.3967 123.585 87.1602 122.494 86.9071C120.969 86.5495 119.499 86.0708 118.238 85.086C116.745 83.9251 116.2 82.3516 116.365 80.5526C116.652 77.4001 119.179 75.9366 121.663 75.5955C123.568 75.3369 125.446 75.4029 127.219 76.1677C129.235 77.0425 130.474 78.583 130.788 80.7891C130.909 81.6419 130.793 81.752 129.945 81.752C129.064 81.752 128.183 81.7409 127.302 81.752C126.906 81.7575 126.696 81.6804 126.586 81.2073C126.25 79.7713 125.325 79.1111 123.811 79.1056C123.067 79.1056 122.324 79.0506 121.624 79.4467C121.019 79.7878 120.65 80.25 120.628 80.9597C120.611 81.6804 121.008 82.1481 121.591 82.4892C122.764 83.1769 124.092 83.43 125.386 83.7656C126.933 84.1672 128.414 84.7284 129.615 85.8012C130.937 86.9841 131.372 88.5356 131.135 90.2796C130.722 93.3606 128.359 94.6535 125.722 95.0717C123.827 95.3742 121.955 95.2642 120.154 94.5655C117.808 93.6577 116.519 91.9137 116.189 89.4379C116.117 88.8877 116.299 88.6071 116.905 88.6621C117.384 88.7006 117.874 88.6676 118.359 88.6676L118.37 88.6786Z" fill="white"/>
//             <path d="M36.95 94.8298C36.4213 94.8298 35.8926 94.8078 35.364 94.8353C34.8518 94.8628 34.5544 94.6922 34.3892 94.1751C34.1524 93.4488 33.8165 92.7501 33.5632 92.0294C33.431 91.6553 33.2273 91.5232 32.8363 91.5232C30.6996 91.5342 28.5629 91.5342 26.4317 91.5232C26.0738 91.5232 25.8755 91.6498 25.7489 91.9964C25.468 92.7831 25.1321 93.5479 24.8512 94.3291C24.7301 94.6647 24.5594 94.8353 24.1849 94.8298C22.9734 94.8188 21.7618 94.8188 20.5503 94.8298C20.0327 94.8353 20.0381 94.6317 20.1979 94.2246C21.7233 90.4174 23.2322 86.6102 24.7466 82.7975C25.5561 80.7618 26.3711 78.7262 27.1476 76.6741C27.3734 76.0799 27.6597 75.8048 28.3371 75.8543C29.2788 75.9203 30.2315 75.8983 31.1732 75.8598C31.6578 75.8433 31.8946 76.0579 32.0543 76.4705C33.6513 80.5308 35.2538 84.5856 36.8618 88.6458C37.5888 90.4779 38.3102 92.3155 39.0646 94.1421C39.2959 94.6977 39.1417 94.8573 38.591 94.8353C38.0403 94.8188 37.4896 94.8353 36.939 94.8353L36.95 94.8298ZM29.6698 81.389C29.5872 81.5321 29.5486 81.5871 29.5266 81.6476C28.7611 83.6503 28.0067 85.6529 27.2302 87.65C27.0705 88.0626 27.2137 88.1562 27.5882 88.1562C28.662 88.1507 29.7414 88.1562 30.8152 88.1562C32.2801 88.1562 32.2856 88.1562 31.7624 86.7973C31.0851 85.0312 30.3967 83.2706 29.6698 81.3945V81.389Z" fill="white"/>
//             <path d="M50.6161 9.46308C50.6161 6.60218 50.6327 3.74128 50.6051 0.880376C50.5996 0.242174 50.7483 -0.00540382 51.4477 9.79137e-05C55.0602 0.0331083 58.6673 0.0331083 62.2798 9.79137e-05C62.9627 -0.00540382 63.172 0.220167 63.1279 0.874874C63.0783 1.57359 63.0893 2.28332 63.1279 2.98754C63.1554 3.51571 62.9352 3.66976 62.4285 3.66976C60.2257 3.65325 58.023 3.68626 55.8257 3.64775C55.2034 3.63674 55.0162 3.85131 55.0492 4.4455C55.0933 5.21574 55.0988 5.98599 55.0492 6.75623C55.0052 7.41644 55.2695 7.57049 55.8863 7.55948C57.8027 7.52647 59.7191 7.56498 61.63 7.53748C62.2468 7.52647 62.5166 7.69152 62.4726 8.34623C62.423 9.02294 62.423 9.71066 62.4726 10.3929C62.5166 11.0476 62.2468 11.2126 61.63 11.2016C59.7136 11.1686 57.7972 11.2126 55.8863 11.1796C55.2695 11.1686 55.0052 11.3227 55.0492 11.9829C55.1043 12.7916 55.0933 13.6114 55.0492 14.4256C55.0162 15.0198 55.1979 15.2344 55.8202 15.2234C58.1111 15.1904 60.402 15.2234 62.6873 15.1959C63.3096 15.1904 63.5629 15.3664 63.5244 16.0101C63.4748 16.7969 63.5024 17.5946 63.5134 18.3869C63.5189 18.7995 63.3702 18.9866 62.9407 18.9811C59.0197 18.9756 55.1043 18.9701 51.1834 18.9811C50.6161 18.9811 50.6161 18.6455 50.6161 18.2439C50.6161 15.3169 50.6161 12.39 50.6161 9.46308Z" fill="white"/>
//             <path d="M71.1421 85.3719C71.1421 82.467 71.1531 79.562 71.1311 76.6571C71.1311 76.0629 71.3073 75.8594 71.9186 75.8594C75.5752 75.8814 79.2263 75.8814 82.8829 75.8594C83.4501 75.8594 83.6814 76.0189 83.6484 76.6076C83.6098 77.3118 83.5988 78.0161 83.6484 78.7203C83.698 79.386 83.4061 79.529 82.8003 79.5235C80.6636 79.496 78.5269 79.5345 76.3957 79.5015C75.7734 79.4905 75.5256 79.6611 75.5697 80.3103C75.6193 81.097 75.6082 81.8948 75.5697 82.687C75.5422 83.2317 75.7349 83.4133 76.2856 83.4078C78.2681 83.3802 80.2506 83.4133 82.2276 83.3857C82.8058 83.3802 83.0206 83.5618 82.9876 84.145C82.949 84.8712 82.9545 85.5974 82.9876 86.3237C83.0096 86.8628 82.8168 87.0554 82.2661 87.0499C80.2837 87.0279 78.3011 87.0609 76.3241 87.0279C75.7459 87.0169 75.5422 87.1929 75.5697 87.7761C75.6137 88.6564 75.6027 89.5367 75.5697 90.417C75.5532 90.9121 75.7404 91.0662 76.225 91.0607C78.56 91.0442 80.8949 91.0717 83.2243 91.0387C83.8687 91.0277 84.0779 91.2422 84.0449 91.8694C84.0008 92.6617 84.0228 93.4539 84.0394 94.2462C84.0504 94.6698 83.8686 94.8294 83.4501 94.8294C79.5512 94.8239 75.6578 94.8184 71.7589 94.8294C71.1752 94.8294 71.1366 94.5158 71.1366 94.0756C71.1421 91.1707 71.1366 88.2658 71.1366 85.3609L71.1421 85.3719Z" fill="white"/>
//             <path d="M54.2691 83.5457C54.8032 82.5939 55.2934 81.7466 55.7614 80.8828C56.56 79.3974 57.3585 77.9064 58.1294 76.4044C58.3222 76.0248 58.5535 75.8542 58.994 75.8652C60.2276 75.8928 61.4556 75.8818 62.6892 75.8707C63.1573 75.8707 63.3665 75.9643 63.0746 76.4704C60.9435 80.2006 58.8233 83.9363 56.6976 87.6665C56.5104 87.9966 56.4168 88.3432 56.4223 88.7338C56.4333 90.5164 56.4113 92.2934 56.4388 94.076C56.4498 94.6427 56.2791 94.8682 55.6899 94.8407C54.7922 94.8022 53.8836 94.7967 52.986 94.8407C52.3361 94.8737 52.0828 94.6867 52.1103 93.9935C52.1599 92.6785 52.0443 91.3471 52.1489 90.0377C52.259 88.7063 51.7965 87.617 51.1521 86.5166C49.5056 83.6997 47.9141 80.8443 46.3005 78.0054C45.9866 77.4552 45.6782 76.8941 45.3588 76.3494C45.1551 76.0083 45.2487 75.8707 45.6342 75.8707C46.9779 75.8707 48.3161 75.8707 49.6598 75.8707C49.9626 75.8707 50.1389 76.0083 50.282 76.2669C51.3669 78.275 52.4573 80.2776 53.5476 82.2748C53.7624 82.6709 53.9992 83.056 54.2801 83.5402L54.2691 83.5457Z" fill="white"/>
//             <path d="M8.23462 0.01648C10.7238 0.01648 13.2129 0.0329852 15.6965 0.00547654C16.3133 -2.51955e-05 16.506 0.209041 16.4785 0.803228C16.44 1.68351 16.451 2.56378 16.4785 3.44406C16.4895 3.90621 16.3023 4.06026 15.8507 4.06026C14.2647 4.04375 12.6787 4.07676 11.0927 4.04375C10.5365 4.03275 10.3823 4.23081 10.3823 4.76998C10.3988 9.19337 10.3933 13.6168 10.3933 18.0402C10.3933 18.9755 10.3933 18.9755 9.44064 18.9755C8.58156 18.9755 7.72248 18.9425 6.86339 18.9865C6.24662 19.0195 6.0759 18.7774 6.08141 18.1887C6.09793 13.8313 6.09242 9.47396 6.09242 5.11659C6.09242 4.4087 5.73264 4.05475 5.01306 4.05475C3.60329 4.05475 2.19351 4.02724 0.783735 4.06576C0.161451 4.08226 -0.0202775 3.85119 0.00175029 3.2625C0.0402989 2.40423 0.0347919 1.54596 0.00175029 0.687692C-0.0147705 0.165027 0.2 0.0109783 0.706638 0.0109783C3.2178 0.0274835 5.72897 0.01648 8.23462 0.01648Z" fill="white"/>
//             <path d="M124.809 48.8957C124.809 51.0964 124.787 53.2971 124.82 55.4978C124.831 56.1415 124.672 56.4166 123.978 56.3726C123.102 56.3176 122.215 56.3176 121.34 56.3726C120.646 56.4166 120.492 56.1415 120.497 55.4978C120.519 51.1624 120.508 46.8271 120.508 42.4917C120.508 41.7912 120.145 41.4409 119.418 41.4409C117.986 41.4409 116.554 41.4244 115.123 41.4464C114.621 41.4519 114.401 41.3033 114.418 40.7697C114.451 39.8674 114.44 38.9651 114.418 38.0628C114.407 37.5952 114.555 37.3916 115.056 37.3916C120.123 37.4026 125.184 37.4026 130.25 37.3916C130.685 37.3916 130.9 37.5181 130.889 37.9913C130.867 38.9376 130.867 39.8839 130.889 40.8302C130.9 41.2978 130.696 41.4409 130.256 41.4354C128.758 41.4189 127.26 41.4354 125.762 41.4354C125.123 41.4354 124.804 41.7636 124.804 42.4202C124.804 44.5769 124.804 46.7335 124.804 48.8902L124.809 48.8957Z" fill="white"/>
//             <path d="M1.11599 85.3557C1.11599 82.4783 1.13251 79.5954 1.09947 76.718C1.09397 76.0468 1.29773 75.8267 1.96407 75.8597C2.88372 75.9092 3.8144 75.9037 4.73406 75.8597C5.36735 75.8267 5.56561 76.0413 5.56561 76.6795C5.54358 80.9433 5.54908 85.2071 5.55458 89.4765C5.55458 90.984 5.36735 90.7859 6.90379 90.7914C8.90281 90.8024 10.9073 90.8189 12.9063 90.7804C13.5892 90.7639 13.793 91.0005 13.7544 91.6497C13.7049 92.5024 13.7269 93.3662 13.7489 94.219C13.7599 94.6756 13.5727 94.8352 13.1266 94.8352C9.34336 94.8242 5.5601 94.8242 1.77683 94.8352C1.23715 94.8352 1.11048 94.6096 1.11048 94.1255C1.127 91.204 1.11599 88.2771 1.11599 85.3557Z" fill="white"/>
//             <path d="M52.8007 46.9539C52.8007 49.8093 52.7786 52.6702 52.8172 55.5256C52.8282 56.2078 52.5969 56.4059 51.9471 56.3729C50.9613 56.3234 49.9701 56.3454 48.9788 56.3674C48.5218 56.3784 48.3621 56.1913 48.3621 55.7457C48.3731 49.8313 48.3731 43.9225 48.3621 38.0081C48.3621 37.546 48.5493 37.3919 48.9899 37.3974C50.0252 37.4139 51.0549 37.4249 52.0903 37.3974C52.6354 37.3809 52.8117 37.5845 52.8117 38.1236C52.7951 41.0671 52.8007 44.016 52.8007 46.9594V46.9539Z" fill="white"/>
//         </svg>
//         </div>
//     </div>

//     <div className=" flex flex-col items-center justify-center mt-[4.68rem] space-y-[3.97rem] text-center
//                 md:ml-auto md:flex-row md:gap-12 md:my-auto md:mr-36">

//                 <div className="flex flex-col">
//                 <div className="w-[5.29744rem] h-[1.229rem] text-orange-500 text-[0.75006rem] font-bold font-title mb-[0.43rem]">Socials</div>
//                 <div className="w-[5.29744rem] h-[1.229rem] text-white text-[0.64288rem] font-normal font-title leading-normal">Instagram</div>
//                 <div className="w-[5.29744rem] h-[1.229rem] text-white text-[0.64288rem] font-normal font-title leading-normal">Facebook</div>
//                 <div className="w-[5.29744rem] h-[1.229rem] text-white text-[0.64288rem] font-normal font-title leading-normal">Twitter</div>
//                 <div className="w-[5.29744rem] h-[1.229rem] text-white text-[0.64288rem] font-normal font-title leading-normal">Linkedin</div>
//                 </div>

//                 <div className="flex flex-col">
//                 <div className="w-[6.03119rem] h-[0.92544rem] text-orange-500 text-[0.75006rem] font-bold font-title mb-5">Connect With Us</div>
//                 <div className="w-[6.54175rem] h-[0.92544rem] text-white text-[0.64288rem] font-normal font-title">+91 9546898080</div>
//                 <div className="w-[6.66938rem] h-[0.92544rem] text-white text-[0.64288rem] font-normal font-title">brightlayersmail.com</div>
//                 </div>

//     </div>
// </div>

// <div className='flex flex-col items-center md:flex-row w-full '>

// <div className=' w-[30rem] h-[2.8125rem] text-white text-center font-title font-normal text-sm px-24 '>Copyright @TheBrightLayers</div>
// <div className='w-[28rem] ml-auto flex-row hidden md:flex'>
//     <div className=' w-[10.0625rem] h-[1.8125rem] text-white font-title font-normal text-sm px-24 '>Legal</div>
//     <div className=' w-[29.9375rem] h-[1.8125rem] text-white font-title font-normal text-sm px-24  '>Site Map</div>   
// </div>
// </div>


// </div>
