import { FC } from "react"

interface PropsIcons {
    fillIcon?: string
    widthIcon?: number
    heightIcon?: number
}

const IconAddToCart: FC<PropsIcons> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.widthIcon || 21}
            height={props.heightIcon || 20}
            fill="none"
            viewBox="0 0 21 20"
        //   {...props}
        >
            <g fill={props.fillIcon || "#C73B0F"} clipPath="url(#a)">
                <path d="M6.583 18.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm8.751 0a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM3.446 1.752a.625.625 0 00-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 00.612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 00.61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248z" />
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5z" />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M.333 0h20v20h-20z" />
                </clipPath>
            </defs>
        </svg>
    )
}


const IconCarbonNeutral: FC<PropsIcons> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.widthIcon || 21}
            height={props.heightIcon || 20}
            fill="none"
            viewBox="0 0 21 20"
        >
            <path
                fill={props.fillIcon || "#1EA575"}
                d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 01.607 1.072V17.5A1.25 1.25 0 018 18.75z"
            />
            <path
                fill="#1EA575"
                d="M14.25 18.75h-1.875a1.25 1.25 0 01-1.25-1.25v-6.875h3.75a2.498 2.498 0 002.488-2.747 2.594 2.594 0 00-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 00-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 005.5 5a2.5 2.5 0 100 5v1.25a3.75 3.75 0 010-7.5h.05a5.019 5.019 0 014.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 013.868 3.384 3.75 3.75 0 01-3.733 4.116h-2.5V17.5h1.875v1.25z"
            />
        </svg>
    )
}

const IconDecrementQuantity: FC<PropsIcons> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.widthIcon || 10}
            height={props.heightIcon || 2}
            fill="none"
            viewBox="0 0 10 2"
        >
            <path fill={props.fillIcon || "#fff"} d="M0 .375h10v1.25H0V.375z" />
        </svg>
    )
}

const IconIncrementQuantity: FC<PropsIcons> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.widthIcon || 10}
            height={props.heightIcon || 10}
            fill="none"
            viewBox="0 0 10 10"
        >
            <path
                fill={props.fillIcon || "#fff"}
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25z"
            />
        </svg>
    )
}

const IconOrderConfirmed: FC<PropsIcons> = (props) => {
    return (
        <svg
            width={props.widthIcon || 48}
            height={props.heightIcon || 48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21 32.121l-7.5-7.502 2.12-2.119L21 27.879 32.377 16.5l2.123 2.122L21 32.121z"
                fill={props.fillIcon || "#1EA575"}
            />
            <path
                d="M24 3a21 21 0 100 42 21 21 0 000-42zm0 39a18 18 0 110-36.001A18 18 0 0124 42z"
                fill={props.fillIcon || "#1EA575"}
            />
        </svg>
    )
}

const IconRemoveItem: FC<PropsIcons> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.widthIcon || 10}
            height={props.heightIcon || 10}
            fill="none"
            viewBox="0 0 10 10"
        >
            <path
                fill={props.fillIcon || "#CAAFA7"}
                d="M8.375 9.375L5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1z"
            />
        </svg>
    )
}

const IconEmptyCard:FC<PropsIcons> = (props) => {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.widthIcon || 128}
            height={props.heightIcon || 128}
          fill="none"
          viewBox="0 0 128 128"
        >
          <path
            fill="#260F08"
            d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828z"
            opacity={0.15}
          />
          <path
            fill="#87635A"
            d="M119.983 24.22l-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 002.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986z"
          />
          <path
            fill="#AD8A85"
            d="M74.561 44.142l47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782z"
          />
          <path
            fill="#CAAFA7"
            d="M85.636 36.78a2.4 2.4 0 00-2.667-2.054 2.375 2.375 0 00-2.053 2.667l.293 2.347a3.574 3.574 0 01-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 01-1.333 1.307 4.696 4.696 0 01-3.787-4.08 2.378 2.378 0 10-4.72.587l.294 2.346a2.389 2.389 0 01-.484 1.755 2.387 2.387 0 01-1.583.899 2.383 2.383 0 01-1.755-.484 2.378 2.378 0 01-.898-1.583 2.371 2.371 0 00-1.716-2.008 2.374 2.374 0 00-2.511.817 2.374 2.374 0 00-.493 1.751l.293 2.373a4.753 4.753 0 01-7.652 4.317 4.755 4.755 0 01-1.788-3.17l-.427-3.547a2.346 2.346 0 00-2.666-2.053 2.4 2.4 0 00-2.08 2.667l.16 1.173a2.378 2.378 0 11-4.72.587l-.107-1.28z"
          />
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.974}
            d="M81.076 28.966l34.187-4.16"
          />
          <path
            fill="#87635A"
            d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387z"
          />
          <path
            fill="#AD8A85"
            d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787z"
          />
          <path
            fill="#CAAFA7"
            d="M60.836 42.78a119.963 119.963 0 00-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 107.066.8 3.574 3.574 0 117.094.8l-.8 7.094a5.93 5.93 0 1011.786 1.333 3.556 3.556 0 017.067.8l-.267 2.347a3.573 3.573 0 007.094.826l.133-1.2a5.932 5.932 0 1111.787 1.36l-.4 3.52a3.573 3.573 0 007.093.827l.933-8.267a1.174 1.174 0 011.307-.906 1.146 1.146 0 011.04 1.306 5.947 5.947 0 0011.813 1.334l.534-4.72a3.556 3.556 0 017.066.8 3.573 3.573 0 007.094.826l1.786-15.546a2.373 2.373 0 00-2.08-2.667L44.143 55.74l16.693-12.96z"
          />
          <path
            fill="#87635A"
            d="M59.156 57.66l1.68-14.88-16.827 13.173 15.147 1.707z"
          />
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.974}
            d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654"
          />
        </svg>
      )
}



export {
    IconAddToCart,
    IconCarbonNeutral,
    IconDecrementQuantity,
    IconIncrementQuantity,
    IconOrderConfirmed,
    IconRemoveItem,
    IconEmptyCard
}