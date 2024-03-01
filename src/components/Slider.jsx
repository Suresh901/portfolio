"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const SliderComp = () => {
    const product = [
        { image: 'https://static.vecteezy.com/system/resources/thumbnails/001/416/705/small_2x/html5-emblem-orange-shield-and-white-text-vector.jpg' },
        { image: 'data:image/png;base64,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' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' },
        { image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADbCAMAAABOUB36AAAAkFBMVEX///92Srx0R7tzRbtsObhvPrlxQrpvP7lqNrdsOrhqNbdpM7f9/P7r5vXx7fjm3/Le1e6Vdsr39ft8Ur/Zz+vFtuGghc/Vyunh2e/Pw+awm9eKZ8W1odl6T77Ds+C6qNyFX8N/V8CcgM2PbsesldXLveSljNGXecu+rd6CW8Kzntinj9KIZMT08fqtltWYfMuCBk7BAAASDUlEQVR4nNVdaXeyOhAuIQlEwX1fsYraWtv//++u+tqWyUYIAXqfc+6H+x4LTDIzmT0vL/Vg0JufF8f+MnlLlvvJ5yrtXWt6c23onU9DzEhAfYSQd/vPp5SwcN0/d5v+NFe4jvuYBT7yRCA/wPQ4jZr+xNKI0j0mvoTCX1BGj7Omv7MUZpM8Gp+U4mTe9LdaY7psUQMa/7EvW4+b/l4rTBNsspG/hJLhtOlvLozZMpTpHD2h4f7/pXcHk7DQTn7DDw//I62bEmOZ5BF4o6a/3hCdPbMl0rtz7qFpAoyQMit+/QVJ/gdG4BcuR+QNvv/XrYV4qJfKmy1LCMNhGN4sXKrSxaidNk2IFiOmPkUQJTgcTlbjaa87uHbiUbpYYqYgNVw1TYoGaVvJhyR8O6biqdhb7ULp/uPPBr7fDJuWYh+D9n4Tq/6qewgDGZ1/VeGu5FTSMDnrVWd09iWE/lE6F6GMyKB9MTDgolVbPIXwX5TPT9lBEgSrgdmfd/bi34fnaj/ZAivJXtKWKZF3jEUt3f5rLstYpBLhSTFrpiOeuS2l4moEPfEkIbvCpkzUJ/xSeQXYoXLE/OfdDPB3mwddeKOf7l1/qz2iNS9Vvm/pTgkizv6OGtrzMkXfrHltxSvc8K+Y8Sue04J+iactuKehobMPLYUZr35KUfnyMuEsomDh6ENLQRBMWo7Kl5clZxC1/gLbXrjF93dlg1YDLg+Bdk4+tBT4ExP55SMcM07dso2DDy2HIcey7Z6Dh545NUSbNhJWnGHg6JjbQ/GkFydPtUaHO+VcGS0dbjvbHTfPtcQJrjqirmLmY0gnPTp6rhV63GaG7hynBMo8a9JV+eBEyOGad6G2pRN3jy6KEfwU5LtM8xyhodxqLhL/ARkLO/X1B1CH08ZMPk4y/bJGHocVNK+cabei6EPJdK30I8i1pKGcfQzDstR5WPUM2BYlrp9vhgtcbfcGGbedYSMJ+wiqiKCC2DGUzmYsvjEkE1egIQZQLJyeV6ZYgtMk2FbxjglgW9ZAVUKHs1IqcZVm4MhqwrA9Q7mp6PB+AyxDqnmJ+QdU5SjBxayfa2PATv6potcMQAiG1p7BhroeV7bMIIxQf8gWuIMVvj4Fxxau2euEepZWl1a+gigCqTnEt6ltkQHX+q/VvUgG4JxUGi4GuhZ5Fb5JRAT0bDUW0BMxEI+wVuEcsfreDQ2EWovcFllbs2I1D2JC7p1aHYDZXvGrwZGCPip9FwSMRpFqq1o4e6tGZ6wHRJNVHFr0sqxTp4GwBUq+6uwjODlZjV05X9kXV64V3rM6qNLDiwMw20nV6wuiMTUmGTr1ntizrCZA9ZVDQeMgqFr3QTuoPnMPmpnLyt8HXOtWbfl5aJfkC0t3s5i8HrZz20BKGAa/Og/XFpQGNlCQU2wQf1IcUN+nAWu/bey2It70KX62ONQXDwL1TvqDrPOV7eBEJG9RlIh6n+vwTmltxvsAWF9aJkqFCnZWojGqu9rhgNV1cHYBmUTz2QdJYbhPywhXd7urKyY9BYa7Jrt6lDb+oZLVEnUl52GOCCl/d1b0xP2twm4lVsCnTlQ/6yobqf5SYbcaIH2rLjj4UHdxuq3FqAivIKSosg6mujZOf32DN9y9Jcv+6+V9u5n3un+Nk80iJEttnzz6hn8zHGgQMIbbQfK1SEd/phF3B8hU9GHESsnU0O5Twpi3PKSzP9AuD2RO5eZuZL2KhtRSgtvJYd5wQxF0wxRZjdeSbeR3WoeXaYMCC9hRVZS0KzzCQkYqay/PTW0qJFNhSZcn8klqgHfvjXQuQDLlDkpUkmcBpTT0VvXvKSBT4YdFDngWUIqTcc3aF5KpMGiE5rjSlJJWvSOiTJiWbz1wAhp+1BiMNiLz3XrEjA6IoXNdZ4yRpuWL/Z0RSui2HiE1Mg9ekFY4yQMMhxgzcp++Jx1PJ0dAznUQCt+pCs2sdNYeia93dDqduNubpufFZL9jISPUjFri11BRAsrYlLUyA41wBtJqrc5svjoNCZYPHuQIXVeujIASVdeXjZXSqe09GvQ2k2ErdzgfwomLnjsNzNzql5eTaj/buRHlznyCcKDfVBROKlW6BxAkUcd1op18S0KzSGv3vAz1m0orLfoCygW9qX84WMv2s2U+EOE67jMtpWxZXScgrBb0Nb+MxBFtflgsOTBI96GGe/2wsu4UGI4OtAJyZgH8qn1xV6OzXWumTLJ9RRIKkwtMzzbRIvge1+UH4dIynTU6YeX55FdUsANTRSzPbYimhyQMcRjstyWcxs67WvOGlTSoRKBQxywRN+iUts+is6ca+xbsqtBEoJ+xim4iFcaIyAn1AyfJ3RNI1k2aq+TdIGFkzz+0y6c94x0cYghLLJLSzy+CaMvkygiXLRhKWwh2ocEThdUcoxkc5cdLsCz1IZ8hv2WxeVa+EnSXWCaidGiviJ6GTAjOYJiVb2Aq59yXca5PbFf8+hyWBstUYE6siWGVg2NbsqHIks4YPcUAJr4+zfLVlaI3lIQnELaJcc5+zmNIy7xRHfSNQ0vcUISLO9vTjKSDEmhYLMgqduOV6MkktPCEs2k2Ugmj6yCmXmclL0QkG+Cca2RDzGEbGEi+wzhJg4UhY/FoQYVOuBHMqsOKdtgiRhpMtsaewLiImHtCM97vB0XQnMvZ5MD5wV4cTGlcXxULzADD68Dcam4qygMXQUD9NzPlf/UElqegnwd06tfchydgI1StGNaRiaHHIAEG4xzwdP1mLYRYakVM6jT7glizL/gLGCixLgZ2hZEwnBvnh3DfhbCjOEwetnYnVXx7EcyE+EluaH8qsLrkagA4kKCiXpTr/L3/sUv2xzS3xE2kk+r/hh9xJy+YjKvvx+31Q/K4dsynJNznRSm7/Gf7ifb3/DxRJLdZQfoPrS1JUSPeg/txfJzkGHE9vuI80MU1+WmPiMgfD7nWwjHQIxUuAUJ5Ua0pr4c0U/+6/JqoLH444sr18JeVrIAzL6rFV50jpLQS3jhJVq8InD6nT6UUhWwW/g0kh84jx4lUFVzdcj/UXL/Cme8uU41zVTEuzuFbXq8oqs35AaVME1IfANXmUgkN1Dc6tfX21oCrX0GelG25AaXKTZf82OGQmYm6OiPPEOHHdUt1Bj/TUj/QAFqS7pzrWC6Yz9XMqSDZcpwgm1rH6R+SE96F5YfOxuBddHVwue2iXLGgZPWh2+GFeaU3sMLJWc5If9da3p0aV44XRC0Ep13n959yCqvtxrDt6clUVs99I4VfJUge3EyFkgKASshRE/tZ3/OQ/xaObfnCZliF3zIw37j5624mTGj07GP5NRU6/9CBRh83fmIER/cZSRq0hNzMZzvl1LGpWwy/wdk4UDrhXptNQeSUVttFlXZeXbWuEOkJeASAqTTwtCKGYQ/NA21Rfjf51c/mj+CkI1PTjR9r6qD881BWNl94AyCrtcAams9x4cbXOwhljhVFFE8YHc9cqI/9SCAYwFFgNg4cfOyR7UsUlUsEdvVV8mZRRDj8/td9Amq8QJ6dbx9Cu1abDvuLEtEEfZW8mREyhTbAD6ODyE4R1jvzQRXv0YiJPeu6e21vh2mslLO3n2sD+ilM1ewDqm4wRJClPuroPBRmyGhQwr8jj0DPskIBD6XKQKGlMa9xUYyH3cHV/+aBrAYuapuqWzUtK5IGyjtzC9ydAzbOCx8+JRi5XbSWQNMTT+2GCY1UsSBiXlIKWf9fNy1wfgysKQjNhIPAjm/Hci+l0KrBUagPczvr/BSfEi9ktjNoWZUuz6XyTgrxBrT42P2fsnakRYqdD+5mYOK2ipB1f6JWsZA3vEXgkYLNxg2Kj9uf6/x9m4svNuIDEUNF+QKUu9w/I5uUtYjQaTbTat5pxLOsH4S74uHuOT+fL2tGqsZSqNFV3Fb9RPGI3ydUQMg7bW0cWZDBvJ+cWbqLD5nMCd4UztjzcVrrSyvgVJEIfGjxgM5E7wf7X/mPAODCB4HV7bN3AM/1ZtZmLYbiVwJ9aD2KwoUJc87asM+1AeEko5fj7/pZpHySHDKL6SA+21OiAQR4rjfncv/7ZItZj3m7WWzh+PglLfw9P4iyOoiusvtRWJKEC6jK7SZf4cPKdPRldRA9vLxl/q94v5U2tVOQP4QEZalRxtkNuO3fMENm8QL9vGxAkYXjG5XLZU2zZ8BttbMfVZzMmT5GVWQaccodmSWTpqD1IAFkWpSE6Jm2bX4gxLwtWzIrAyYCDl/WmfWzcBA/dXQWufmPd0zK3lgNxGmdlU2b+wj5wgyA0DwW8cUtV+ngNtQa2QPFSrXxV1fbbaZwZ3v+fIQcbOFuZsyD4iGSO9QR5NC4PS3lA0DlK8dA2GsHFK9u3qwS/B3dvxtiHL8XKgs1pWimABbVG9AhVl1W4lY899LYIBWUrNcqX2jUh+fmNkOm5W2eqawDr21MZUeYKhM4qGTIhjVuR0jWY7GViJnH6yFqbhjwNp6bu2Sg6f4JwrTWz48O7exkAtp+NZbywVCw/nOK84wAHLGbhwL6EOzr1q+rISb0Poo1wP7BvAN4sBaoZC4KOkF2585aWfMjt75IhzhdTL5eL5sik1cle0mLu4MSgOjNPWXCqaRa0fEEKtHQSecrTHFeORsXVzeDR4KuJP3l5gJ50MvwiGGAyoNae4R6kjkjbTcjY4AN9DA6QeKv8suHMkgloey8Sm9TSFqGQXSuvnnk75L8u1EXmwFgcd6/pC0oa6hNCb1KckzOZtvDSFz4+DcY6HDePCNFvJO44zktT+aADTXf0RbAyH4d2zmXDRbx1676WeCM7u9KJ1gpV91dtz+4yMpiEHJ1mPGlvk/DE3Jt5XftdteygAOizo5smPH4rfSF4SZS7ciGs3QSTpFO/hyMoXL7HU7BFaVVaQp1lvL7YKgzKq9cvvs38sN1LFWohVImTbr4nruV5dI62S5aLhVSFdvGe3m40x+66xnkZ8Zmx2zEnN0VVqJtV/Kt9Gjijko+rgRTpHxmsQLxHK0VdYzMIgquxJDTbzAmyxd4Or86qXMKFfHc0OUdnvzUBn6GKleo4tAkuSNaqeaSopZL149vyRXi/hFvY/pDd1fqpELk7+ct1KUW+OQPK3Hk6pw3wHzq6JqD0ZtqTKcXlLgOT8SC1+Oysb+v/H6igsOB5ZjtVULpeS2nU1eFoTrSJrBIHKCDS3u53b4ww+CXXdzerPsqVPvJIyEzMWgRDEuJznTZ0kxEXrpk2E7Ci7/SFxiL/hHCJ9sTdHAeKsyBx4MdTFvNYC6+Sj2N7iI5wP3Wpw2hvYluiLfHEpfTlAYncYM00zpeTjJDhbJjwW/qvuvmd9+HgisPy4WFlIwlowVbWrk/SQ842lqOTQVpMPr0QnWXhXcXhL6KP6I9w7tNMe4Z7SSuXV4LfF9ueCLC9uNclzDqbfeUaWm8uQyekp2u90DY7VVfc2MTLE1kXnp+M4E40u0Jn4Ssvx3Jx3pHndF5MmyzQF/Dd5cAterpfl8+4JP28mwgKPGCyOZmK6YcQWw1FxH6AQv9pH/ZjufzaW82642m6eZ86b/5ITO5ysRvH9UcmWaNJT8I15NUR+pslYTSoiS6NopEjHIuJEE+DQhhN2B2v4UnMLyXxvPxq0bsDvyxfb/qDy8vG4GBoni07WOVcLC9YUqts9M3xdqBtk+azRksFUqB3hgI7Zb9yeJ83q7eP1+XQxaqhaPQefyptkMtEbCjjpVmvpaD7qPLaHDjG3qfY6b5IfUKJQ1mKlffCogFK+2BdJYMD7Z5T+tYNAesGhVfHBQnelcn6utHkZiCDC3yP9dJ2wGhPsF51/N1iRPOoba50XiivonEkEbWn+ez0Whf8j33V+GJfZQuPkjPX0MacT81tGa6R/v33EHbr+Wi9oPN0GKp/QDTibnFdkM0TnCOlagCCvDEQWpidvCLfIFPGdtvLZRBd7G2WVG81mtxc0Sjg4dJvq1zt1vI8n1kHfvsXRDONYuzNBI2cZsgiMdf65BRpfVxM3fx21FrhRqhe94T9WvAmrLgdVrFLQHx9L2PntdJ3uvz/EeNXnC/ZNL72jq7Kz3qrfYYa65wvHNNuFyNKr0JIe7Nx+fFZfLV75++Jofted6L3b+wm1726xuxwcO+Q4+r6O8WH7mZuMlx/BeuZHeGQTxKV4dJf/mRvH3s+6+H1WY+u1pQ+B/kXvl0vP/+vAAAAABJRU5ErkJggg==' },
        { image: 'https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp' }
    ]

    const slider = useRef(null);

    function slideNext() {
        slider?.current?.slickNext();
    }

    function slidePrev() {
        slider?.current?.slickPrev();
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        pauseOnHover: true,
        nextArrow: <></>,
        prevArrow: <></>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (

        <div className="pb-10 ">
            <div className={`flex py-2 items-center relative`}>
                <ChevronLeftIcon
                    onClick={() => slidePrev()}
                    className={
                        "flex items-center justify-center bg-slider p-2 rounded-full h-8 w-8  text-black text-lg cursor-pointer absolute z-10 left-[-20px] top-[6rem] md:top-[9rem] "
                    }
                ></ChevronLeftIcon>
                <ChevronRightIcon
                    onClick={() => slideNext()}
                    className={
                        "flex items-center justify-center bg-slider p-2 rounded-full h-8 w-8  text-black text-lg cursor-pointer absolute z-10 right-[-20px] top-[6rem] md:top-[9rem]"
                    }
                ></ChevronRightIcon>
            </div>

            <Slider ref={slider} {...settings}>
                {
                    product.map((item, id) => {
                        return (
                            <div key={id} className="relative  cursor-pointer ">
                                <div className="h-[180px] sm:w-[180px] sm:h-[200px] md:w-[200px] md:h-[200px]  
                                lg:w-[200px] lg:h-[200px] p-5 mx-2 rounded-tr-3xl bg-gradient-to-b from-blue-100 to bg-red-100">
                                    <img
                                        src={item.image}
                                        alt="logo"
                                        className="w-full h-full"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        );
                    })}
            </Slider>

        </div>
    )
}

export default SliderComp