import * as React from "react";

import { Button, Grid, Typography } from "@mui/material";

function HomePage() {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          my: 4,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item sx={{ mb: 6 }}>
          <div style={{ width: 200 }}>
            <svg
              viewBox="0 0 201 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="Logo"
              className="w-full h-full"
            >
              <path
                d="M99.9 8.152l-28.906 19.35v35.984L99.9 47.528l29.195 16.03V27.603L99.9 8.152z"
                fill="#BB8C58"
              ></path>
              <path
                d="M99.9 55.305l-28.906 15.38v36L99.9 94.666l29.195 12.048V70.758L99.9 55.305z"
                fill="#BB8C58"
              ></path>
              <path
                d="M51.02 114.925l14.728-6.074V31.008L51.02 40.877v74.048zM33.474 121.98l12.95-5.353V43.748l-12.95 8.686v69.546zM149.025 12.912l-14.699 10.822v81.089l14.699-5.28v-86.63zM166.556 0l-12.935 9.523v88.39l12.921-4.617L166.556 0z"
                fill="#02AAB5"
              ></path>
              <path
                d="M129.095 114.159L99.9 102.673l-66.657 25.929v12.625L99.9 118.415l29.195 9.884 37.447-12.149v-15.367l-37.447 13.376zM98.96 179.061c.359-.499.678-1.025.954-1.573a3.28 3.28 0 00.39-1.371 14.584 14.584 0 00-.332-3.16 10.08 10.08 0 00-.925-2.568 5.42 5.42 0 00-1.445-1.732 3.127 3.127 0 00-1.923-.649 3.788 3.788 0 00-1.72.375c-.503.269-.957.62-1.344 1.039-.445.45-.855.932-1.228 1.443a62.124 62.124 0 01-1.344 1.876 6.604 6.604 0 01-.853.981c-.29.271-.623.495-.983.664-.4.185-.823.316-1.257.389-.522.075-1.049.109-1.576.101a2.468 2.468 0 01-1.878-.606 2.722 2.722 0 01-.55-1.861v-14.573l-3.729 2.15v13.981c-.009.883.083 1.764.275 2.626.167.764.497 1.482.968 2.107a4.438 4.438 0 001.822 1.443c.24.089.486.161.737.216a8.663 8.663 0 002.167.274H86.575a3.733 3.733 0 001.17-.332c.436-.2.84-.463 1.2-.779.477-.418.917-.877 1.316-1.37.209.615.642 1.13 1.213 1.442.63.365 1.3.655 1.995.866 1.198.204 2.415.267 3.628.188a5.586 5.586 0 001.864-1.587zm-3.57-3.521a7.96 7.96 0 01-1.214-.245 3.442 3.442 0 01-.853-.375.57.57 0 01-.303-.462c.018-.153.067-.3.145-.433.116-.217.257-.42.419-.606.18-.212.389-.396.621-.548.237-.153.513-.233.795-.231a1.297 1.297 0 01.983.678c.419.712.703 1.494.838 2.309-.478.001-.956-.028-1.43-.087zM163.911 163.059a3.216 3.216 0 00-.881.505 3.504 3.504 0 00-.911 1.241 6.72 6.72 0 00-.535 1.89c-.13.75-.245.909-.375 1.934a16.248 16.248 0 017.226 5.656c-.566.174-1.147.3-1.734.375a22.26 22.26 0 01-1.995.173h-4.09a3.359 3.359 0 01-1.445-.26 1.859 1.859 0 01-.766-1.067l-1.446-3.795-4.205 2.482c.231.49.477 1.01.722 1.587.246.577.521 1.183.737 1.789.217.606.42 1.169.593 1.717s.318 1.039.405 1.443v.187a4.216 4.216 0 01-.535 1.313 7.521 7.521 0 01-2.182 2.395 3.738 3.738 0 01-1.041.563l-1.662-.159-1.315 3.478 2.616 1.125c.244.104.495.19.751.26.196.064.401.098.607.101a4.022 4.022 0 002.211-.75 8.002 8.002 0 002.139-2.064 12.135 12.135 0 001.634-3.174c.22-.638.379-1.295.477-1.962.24.192.522.326.823.389.34.057.683.096 1.027.116H163.897a22.34 22.34 0 002.529-.26 11.6 11.6 0 002.139-.548 3.557 3.557 0 001.445-.938c.159-.202.362-.52.636-.952.275-.433.521-.895.781-1.443.241-.468.453-.95.636-1.443.158-.366.251-.757.274-1.154a6.348 6.348 0 00-.332-1.862c-.231-.678-1.633-2.886-5.781-5.454l7.848-2.28v-4.068l-10.204 2.885M172.236 159.784v-1.948l-7.978 2.612-.202 1.875 8.18-2.539zM54.72 167.591l-4.234 2.453c.236.436.439.89.607 1.356.159.491.318.996.462 1.443.145.447.26.981.347 1.443a4.834 4.834 0 01-1.113.361c-.404.086-.809.144-1.185.187H47.9a4.078 4.078 0 01-2.154-.534 2.609 2.609 0 01-1.2-1.775c-.505-2.077-1.228-5.468-1.647-6.406l-4.22 2.439a32.658 32.658 0 012.125 5.641 10.03 10.03 0 01-2.443.549c-.665.057-1.2.086-1.604.086-.55.01-1.102-.019-1.648-.086a1.928 1.928 0 01-.824-.246.534.534 0 01-.26-.418v-.577c0-.483.035-.965.101-1.443l-2.775-.289a16.5 16.5 0 00-.347 2.237 21.04 21.04 0 00-.115 2.265c-.002.565.041 1.13.13 1.688.074.51.306.985.665 1.356.442.432.99.741 1.59.895a10.32 10.32 0 002.89.332c.708.008 1.415-.055 2.11-.188a8.758 8.758 0 001.677-.447c.401-.141.788-.32 1.156-.534.234-.139.452-.304.65-.49a2.89 2.89 0 00.535-.996c.32.555.742 1.044 1.243 1.443.434.344.922.612 1.445.793.468.168.953.284 1.446.347.419 0 .838 0 1.257.072h.26c.483-.008.966-.041 1.446-.101.55-.071 1.096-.177 1.633-.318a7.03 7.03 0 001.358-.476 3.2 3.2 0 00.896-.577c.283-.308.53-.647.737-1.01.301-.495.576-1.006.824-1.529.262-.507.484-1.033.665-1.573a3.91 3.91 0 00.26-1.183 27.844 27.844 0 00-1.04-6.19zM143.186 169.797l-4.119 2.395c.231.491.477 1.01.723 1.587.245.577.506 1.183.737 1.789.231.606.419 1.169.592 1.717.174.549.304 1.039.405 1.443-.112.512-.313 1-.592 1.443a7.524 7.524 0 01-2.183 2.395 3.758 3.758 0 01-1.04.563l-1.663-.159-1.329 3.478 2.63 1.125c.428.2.888.322 1.359.361a4.015 4.015 0 002.211-.751 7.998 7.998 0 002.139-2.063 11.679 11.679 0 001.619-3.174c.447-1.325.667-2.715.65-4.112a15.694 15.694 0 00-.491-3.463 30.575 30.575 0 00-1.648-4.574zM76.949 175.886a41.08 41.08 0 00-.448-2.8c-.188-.995-.463-1.962-.766-2.986l-4.163 2.395c.39 1.659.694 3.189.925 4.603.231 1.414.405 2.813.52 4.112-1.08.399-2.199.684-3.338.851a21.852 21.852 0 01-3.585.303 9.08 9.08 0 01-1.445-.101 8.93 8.93 0 01-1.243-.26 6.357 6.357 0 01-.954-.36 1.452 1.452 0 01-.505-.433 2.895 2.895 0 01-.362-.909 5.856 5.856 0 01-.13-1.313c.014-.762.1-1.521.26-2.266.23-1.062.53-2.108.896-3.131l-2.991-.981a23.553 23.553 0 00-1.446 3.925 16.793 16.793 0 00-.563 4.242c-.007.87.095 1.738.303 2.583.189.774.527 1.505.997 2.149a5.78 5.78 0 002.342 1.703c1.411.572 2.929.838 4.451.779a19.78 19.78 0 003.122-.245c.94-.154 1.868-.375 2.775-.664a13.571 13.571 0 002.183-.909 4.79 4.79 0 001.358-.995c.186-.25.35-.516.491-.794.252-.466.475-.948.665-1.443.23-.541.428-1.095.593-1.659a6.104 6.104 0 00.245-1.616v-1.558c0-.664-.1-1.371-.187-2.222zM28.459 169.305l-4.235 2.439c.182.359.328.736.433 1.125.145.5.26.981.347 1.443-.355.163-.729.284-1.113.361-.396.082-.796.145-1.2.187h-2.456a3.216 3.216 0 01-1.185-.202 1.787 1.787 0 01-.853-.736 4.594 4.594 0 01-.535-1.515c-.138-.83-.22-1.669-.245-2.51l-1.157-.823c-.706.303-1.436.55-2.182.736-.734.188-1.477.337-2.226.447a22.22 22.22 0 01-2.139.231H7.805l-2.645 3.304c.333.751.65 1.573.969 2.468.289.759.516 1.541.68 2.337v.13c-.1.484-.28.948-.536 1.371-.292.484-.63.938-1.011 1.356a7.24 7.24 0 01-1.185 1.039 3.78 3.78 0 01-1.041.563l-1.648-.159-1.33 3.477 2.617 1.126c.274.101.52.187.737.245.2.068.41.107.621.115a4.109 4.109 0 002.226-.75 8.44 8.44 0 002.081-1.933 12.12 12.12 0 001.619-3.175c.325-.989.515-2.018.564-3.059 0-.36.1-.678.1-1.053a12.05 12.05 0 00-.202-2.005c.333 0 .694-.073 1.084-.145l1.142-.187 1.055-.231c.284-.076.564-.168.838-.274.138.852.361 1.688.665 2.496a4.591 4.591 0 001.04 1.702 3.75 3.75 0 001.59.982 6.886 6.886 0 002.24.317h1.649l.809-.115a13.14 13.14 0 001.633-.318 7.427 7.427 0 001.359-.476c.327-.144.629-.339.896-.577.282-.305.524-.645.722-1.01.29-.476.564-.981.839-1.53.25-.512.471-1.037.664-1.572.148-.379.236-.778.26-1.183a14.19 14.19 0 00-.447-4.459zM106.648 157.836h-.159a2.398 2.398 0 00-.679.49c-.207.22-.396.456-.564.707a12.34 12.34 0 00-.549.967 6.9 6.9 0 00-.419 1.024c-.105.282-.164.58-.174.88.017.416.056.83.116 1.241 0 .52.202 1.14.361 1.833l2.385-1.371a29.165 29.165 0 01-.274-1.097 4.55 4.55 0 01-.188-1.111h7.501v-3.592l-7.357.029zM135.251 180.373a4.33 4.33 0 00-.506-2.251 3.498 3.498 0 00-2.139-1.313l-1.894-.505-1.271-.347-.81-.259a1.451 1.451 0 01-.491-.289 5.759 5.759 0 011.763-2.207c.447-.344.984-.55 1.546-.592.298.012.59.091.853.231.381.17.748.367 1.099.591l2.355-3.304a9.671 9.671 0 00-2.139-1.876 3.897 3.897 0 00-2.009-.606 4.256 4.256 0 00-2.514.895 10.423 10.423 0 00-2.284 2.237 12.4 12.4 0 00-1.676 3.001 8.501 8.501 0 00-.651 3.131 6.874 6.874 0 000 .952c.046.321.165.627.347.895.221.32.506.59.838.793a6.214 6.214 0 001.561.664c.838.245 1.605.447 2.269.62l1.879.534a9.798 9.798 0 01-1.59.505c-.616.133-1.238.234-1.864.303a21.04 21.04 0 01-1.922.159h-1.749a9.31 9.31 0 01-1.445-.101 9.397 9.397 0 01-1.243-.26 5.543 5.543 0 01-.94-.361 1.45 1.45 0 01-.52-.432 3.289 3.289 0 01-.361-.909 5.799 5.799 0 01-.13-1.313c.013-.762.1-1.521.26-2.266.23-1.062.529-2.108.896-3.131l-2.978-.981a22.36 22.36 0 00-1.445 3.925 16.784 16.784 0 00-.563 4.242c-.007.87.095 1.737.303 2.582.195.773.533 1.502.997 2.15a5.778 5.778 0 002.356 1.703c1.407.572 2.919.838 4.437.779.994.003 1.986-.089 2.963-.274a20.258 20.258 0 002.789-.693 16.118 16.118 0 002.342-.981 6.96 6.96 0 001.676-1.197c.177-.21.323-.443.434-.693.19-.395.359-.799.506-1.212.144-.447.274-.909.39-1.371a4.99 4.99 0 00.275-1.168zM178.277 169.797l-4.119 2.395c.231.491.477 1.01.737 1.587s.506 1.183.723 1.789c.217.606.419 1.169.592 1.717.165.473.3.954.405 1.443a4.487 4.487 0 01-.578 1.443 8.633 8.633 0 01-1.012 1.356 7.752 7.752 0 01-1.17 1.039 4.044 4.044 0 01-1.055.563l-1.648-.159-1.33 3.478 2.616 1.125c.428.199.888.321 1.359.361a4.112 4.112 0 002.226-.751 8.229 8.229 0 002.139-2.063 12.117 12.117 0 001.618-3.174c.447-1.325.667-2.715.651-4.112a15.885 15.885 0 00-.506-3.463 29.116 29.116 0 00-1.648-4.574zM106.259 169.797l-4.09 2.395c.231.491.477 1.01.723 1.587.245.577.505 1.183.737 1.789.231.606.419 1.169.592 1.717.154.475.284.956.39 1.443a4.191 4.191 0 01-.578 1.443 7.827 7.827 0 01-1.011 1.356 7.808 7.808 0 01-1.171 1.039 3.75 3.75 0 01-1.041.563l-1.662-.159-1.315 3.535 2.616 1.126c.429.197.888.319 1.359.36a4.054 4.054 0 002.225-.75 7.985 7.985 0 002.096-2.063c.699-.97 1.245-2.04 1.619-3.174.447-1.325.667-2.715.65-4.113a15.762 15.762 0 00-.491-3.463 30.765 30.765 0 00-1.648-4.631zM110.392 180.532v.014l3.612-2.092v-15.063h-3.612v17.141zM200.029 157.895l-7.833 2.755a3.966 3.966 0 00-1.446.736 3.499 3.499 0 00-.91 1.241 7.23 7.23 0 00-.521 1.89c-.13.751-.245 1.645-.39 2.684 3.902 1.558 6.75 6.002 7.227 7.113-.572.175-1.157.3-1.749.376-.651.086-1.315.144-1.98.173-.665.029-1.315 0-1.908 0h-1.908a2.54 2.54 0 01-1.936-.606 2.8 2.8 0 01-.55-1.876v-14.458l-3.815 2.194v13.808c-.005.888.092 1.774.289 2.64.168.756.493 1.469.954 2.092a4.462 4.462 0 001.835 1.443c.238.096.485.169.737.217a7.877 7.877 0 002.154.288h3.223a22.338 22.338 0 002.529-.259c.729-.116 1.445-.3 2.139-.549a3.643 3.643 0 001.445-.938c.159-.202.362-.519.636-.952.275-.433.521-.894.766-1.443.252-.464.469-.947.651-1.443.151-.368.244-.757.274-1.154a6.341 6.341 0 00-.332-1.861 13.774 13.774 0 00-5.709-6.926l6.085-2.28.043-4.905zM156.685 162.408h-3.902v3.896h3.902v-3.896zM69.374 165.195h-3.901v3.896h3.901v-3.896zM55.226 160.662h-3.902v3.896h3.902v-3.896zM50.774 160.662h-3.902v3.896h3.902v-3.896zM28.79 184.096H24.89v3.895h3.901v-3.895zM150.874 157.836l-3.612 2.078v20.633l3.612-2.092v-20.619zM6.778 162.67a9.204 9.204 0 00-.159-.981 12.424 12.424 0 00-.274-1.111l-1.445.88c.144.592.26 1.14.332 1.645.072.505.145.996.188 1.443-.38.138-.771.24-1.17.303a7.85 7.85 0 01-1.272.101l-.535.029-.433-.101-.333-.13a.708.708 0 01-.188-.144 2.717 2.717 0 01-.13-.332 2.092 2.092 0 010-.462c.004-.267.038-.534.101-.793.075-.379.18-.751.318-1.111l-1.055-.347a7.451 7.451 0 00-.49 1.443c-.133.47-.2.955-.203 1.443-.006.306.028.612.101.909.068.274.185.533.347.765.225.268.513.476.838.606a4.018 4.018 0 001.575.274c.368.001.735-.028 1.098-.087.334-.054.663-.136.983-.245.265-.08.522-.187.766-.317.178-.087.34-.204.477-.347.07-.09.133-.187.188-.288.072-.13.144-.303.23-.491.088-.187.145-.375.203-.577.056-.187.085-.382.087-.577v-.548c0-.231-.145-.549-.145-.852z"
                fill="#6D6E71"
              ></path>
              <path
                d="M3.499 161.743l.809-1.313a3.87 3.87 0 00-.636-.49 4.176 4.176 0 00-.795-.419l-.766 1.342.723.448c.26.158.491.303.665.432zM18.21 160.447l-.751-.216a2.113 2.113 0 00-.477 0 .923.923 0 00-.434.13c-.149.093-.29.199-.419.317-.13.11-.252.23-.361.361a2.702 2.702 0 00-.203.303 2.06 2.06 0 00-.086.303c0 .144 0 .289-.072.447-.073.159 0 .332 0 .491v.447l1.344-.288v-.376c-.011-.11-.011-.221 0-.331a3.4 3.4 0 01.722.115c.29 0 .723.188 1.272.361l-.448.245-.55.274a2.318 2.318 0 01-.65.231 3.217 3.217 0 01-.635 0H13.86l.13-.404c.01-.096.01-.193 0-.289a1.437 1.437 0 00-.188-.692 3.182 3.182 0 00-.491-.693 3.678 3.678 0 00-.65-.519 1.353 1.353 0 00-.65-.202.711.711 0 00-.449.187 2.389 2.389 0 00-.433.563 4.305 4.305 0 00-.376.895c-.108.397-.18.802-.217 1.212h-.81a.92.92 0 01-.694-.217.935.935 0 01-.187-.649l-.029-4.689-1.286 1.168v3.925c-.005.316.03.63.1.938.057.266.17.517.333.736.165.222.391.392.65.49.323.126.667.185 1.012.173h.954c.048.382.145.755.29 1.111.12.276.286.53.49.751.18.191.396.343.637.447.232.099.484.148.737.144a.737.737 0 00.39-.173c.162-.131.308-.281.434-.447a3.28 3.28 0 00.448-.606c.092-.199.142-.416.144-.635a1.038 1.038 0 00-.159-.592h2.341a2.31 2.31 0 001.027-.202c.3-.132.586-.297.852-.49.376-.289.694-.534.954-.707.21-.154.432-.289.665-.404.294-.157.62-.242.954-.245l.65-1.674-1.922-.664-1.3-.361zm-6.373 1.992c.1-.188.159-.289.216-.289.072.011.14.035.203.072l.26.173.217.231c.064.077.122.159.173.245a.88.88 0 01-.535.332c-.245.067-.497.11-.751.13.034-.306.107-.607.217-.894zm1.04 3.477a1.885 1.885 0 01-.202.288 1.101 1.101 0 01-.52-.259 1.357 1.357 0 01-.448-.751h.852a.36.36 0 01.332.159.505.505 0 010 .26.62.62 0 01-.014.303zM42.724 161.384a6.26 6.26 0 00-.463-1.443l-1.445 1.111c.081.148.15.302.202.462.072.165.135.334.188.505l.174.534c0 .173.087.346.115.505-.123.06-.255.104-.39.13h-1.864v-.173a5.07 5.07 0 00.173-.491 1.324 1.324 0 000-.317 1.7 1.7 0 00-.159-.664 2.906 2.906 0 00-.433-.664 2.175 2.175 0 00-.579-.519 1.262 1.262 0 00-.635-.202c-.231.009-.455.079-.65.202-.23.156-.435.346-.608.563a3.333 3.333 0 00-.448.808 2.62 2.62 0 00-.173.937 1.578 1.578 0 000 .246.706.706 0 000 .274h-1.113a1.077 1.077 0 01-.347-.101.706.706 0 01-.26-.202.724.724 0 01-.13-.375l-.174-1.818-1.445.764.159 1.674H31.855a.872.872 0 01-.26 0 .76.76 0 01-.274-.086v-1.573h-1.128l-.115 1.284c0 .274-.304.404-.766.404a.998.998 0 01-.318 0 .608.608 0 01-.232-.13.577.577 0 01-.144-.245c0-.116-.087-.245-.13-.404l-.29-1.284-1.445.865c.145.592.246 1.155.333 1.66.087.505.144.981.188 1.443a6.814 6.814 0 01-1.185.303 7.74 7.74 0 01-1.272.101 3.05 3.05 0 01-.506 0l-.434-.087-.332-.13a.43.43 0 01-.188-.159.903.903 0 01-.13-.317 2.189 2.189 0 010-.462c.005-.271.034-.541.087-.808.072-.303.173-.678.318-1.096l-1.055-.361a9.336 9.336 0 00-.492 1.443 6.034 6.034 0 00-.202 1.443c0 .306.04.612.115.909.068.269.186.524.347.75.221.272.51.481.839.606a3.644 3.644 0 001.56.274c.373.001.745-.028 1.113-.086a5.96 5.96 0 00.969-.231c.268-.084.53-.191.78-.318.18-.091.34-.213.477-.36.102-.13.19-.27.26-.419.101-.231.188-.447.275-.692a.523.523 0 000-.159v-.144a.609.609 0 00.289.115h.332c.255.005.508-.029.752-.101.246-.079.462-.23.621-.433.159.195.37.34.607.419.208.08.428.119.65.115a1.77 1.77 0 00.68-.115 1.24 1.24 0 00.491-.289v-.101a.72.72 0 00.116-.216c.108.155.246.287.405.389.15.089.31.162.477.217.175.048.354.082.535.101h.679c.42.004.84-.025 1.257-.087.313-.044.6-.197.81-.433.239.246.555.404.896.447.48.05.962.074 1.445.073h.361c.202.014.405.014.607 0l.578-.101c.165-.042.324-.1.477-.174a1.19 1.19 0 00.318-.202c.102-.109.189-.23.26-.36.102-.173.203-.347.29-.534.093-.182.175-.37.245-.563.05-.134.079-.275.087-.418a6.788 6.788 0 00-.16-1.429zm-4.784 1.645a2.323 2.323 0 01-.434.303 1.736 1.736 0 01-.404-.404.503.503 0 01-.116-.303.615.615 0 01.202-.462.695.695 0 01.39-.187c.071.007.137.037.188.086a.78.78 0 01.203.174 1.435 1.435 0 01.303.447c-.099.126-.21.242-.332.346zM17.59 166.203h-1.272v1.27h1.272v-1.27zM30.352 159.18H29.08v1.269h1.272v-1.269zM31.798 159.18h-1.272v1.269h1.272v-1.269zM31.074 157.764h-1.271v1.269h1.271v-1.269zM37.275 157.764h-1.272v1.269h1.272v-1.269zM38.72 157.764h-1.27v1.269h1.27v-1.269zM41.986 157.764h-1.271v1.269h1.271v-1.269zM21.074 184.096h-3.902v3.895h3.902v-3.895zM16.636 184.096h-3.902v3.895h3.902v-3.895z"
                fill="#6D6E71"
              ></path>
            </svg>
          </div>
        </Grid>
        <Grid item>
          <div style={{ height: "60px", width: "638px" }} className="mb-4">
            <svg
              viewBox="0 0 638 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="Logo"
              className="w-full h-full"
            >
              <path
                d="M214.869 42.28h2.976a2.384 2.384 0 001.691-.691 2.38 2.38 0 00.702-1.687v-3.068a2.378 2.378 0 00-2.393-2.332h-2.93a2.377 2.377 0 00-2.394 2.378v3.068a2.369 2.369 0 00.702 1.687 2.388 2.388 0 001.692.691M218.152 17.121a2.409 2.409 0 00-3.069 1.534l-2.025 6.014a8.858 8.858 0 00-.429 1.642 8.242 8.242 0 00-.154 1.319 3.07 3.07 0 00.89 2.317 8.46 8.46 0 002.225 1.641c.307.169.966.445 1.534.706a1.763 1.763 0 002.316-.997l1.243-3.314c.113-.291.168-.602.161-.914a2.375 2.375 0 00-.74-1.662 2.36 2.36 0 00-.786-.492l-1.09-.415 1.381-4.418a2.365 2.365 0 00-1.534-2.945M387.948 11.537h-2.072a2.406 2.406 0 00-2.347 2.378v2.102a2.41 2.41 0 002.409 2.393h2.071a2.41 2.41 0 002.408-2.393v-2.102a2.407 2.407 0 00-2.408-2.378M413.737 31.48a2.488 2.488 0 01-.813 2.133 3.727 3.727 0 01-1.872.705l-3.068.353-2.209-24.04a2.424 2.424 0 00-.897-1.643 2.41 2.41 0 00-1.803-.504l-3.069.368a2.406 2.406 0 00-2.101 2.593l2.362 24.193-3.344.414a2.375 2.375 0 00-2.027 1.746 2.379 2.379 0 00-.06.939l.415 3.068a2.39 2.39 0 002.684 2.04l13.393-1.687a10.746 10.746 0 004.02-1.289 12.603 12.603 0 003.206-2.577 11.554 11.554 0 002.086-3.33 9.44 9.44 0 00.737-3.59V9.252a2.391 2.391 0 00-2.394-2.378h-2.868a2.41 2.41 0 00-2.409 2.378l.031 22.23zM365.12 34.011a.626.626 0 01-.491-.2.43.43 0 01-.092-.46l.798-4.11c.084-.186.204-.353.353-.492a.81.81 0 01.598-.23h4.971a.83.83 0 01.659.276c.155.184.256.407.292.644v4.603l-7.088-.03zm-22.843 0h-6.98a.43.43 0 01-.46-.169.583.583 0 01-.123-.49l.997-4.833h5.661c.24.001.471.094.644.26a.883.883 0 01.261.66v4.572zm32.661 8.039a8.237 8.237 0 004.204-4.065 6.674 6.674 0 00.644-2.854v-5.646a8.725 8.725 0 00-.782-3.65 9.061 9.061 0 00-2.086-3.069 9.835 9.835 0 00-6.873-2.746h-2.67a10.22 10.22 0 00-3.068.43 9.663 9.663 0 00-3.068 1.534 8.703 8.703 0 00-2.056 2.316 8.982 8.982 0 00-1.15 2.93l-1.059 5.293c-.121.384-.35.725-.66.982a1.64 1.64 0 01-1.135.383h-3.651a1.214 1.214 0 01-1.059-.398 1.535 1.535 0 01-.414-1.028v-3.069a8.966 8.966 0 00-.767-3.65 9.507 9.507 0 00-2.086-3.069 10.091 10.091 0 00-3.069-2.01 9.75 9.75 0 00-3.789-.736h-13.423a10.734 10.734 0 00-7.456 2.945 10.215 10.215 0 00-2.255 3.237 9.759 9.759 0 00-.813 3.943v27.568A2.394 2.394 0 00318.79 60h2.869a2.394 2.394 0 002.408-2.378V29.746a1.139 1.139 0 01.445-.92 1.674 1.674 0 011.028-.353h2.27l-.629 3.452a8.84 8.84 0 00.185 4.02 9.199 9.199 0 001.825 3.482 9.559 9.559 0 003.068 2.393 9.023 9.023 0 004.05.89h5.799a8.46 8.46 0 002.486-.384 9.827 9.827 0 002.378-1.09 11.29 11.29 0 005.706 1.535h1.857a8.512 8.512 0 003.068-.583 7.115 7.115 0 002.746-2.071 6.472 6.472 0 002.777 2.148 8.94 8.94 0 002.945.506h5.815a7.563 7.563 0 002.991-.614"
                fill="#6D6E71"
              ></path>
              <path
                d="M383.391 41.068a4.785 4.785 0 01-.92 3.068 4.986 4.986 0 01-2.424 2.163c-1.427.767-4.265 1.013-5.876 1.535-1.611.521-1.779 1.61-1.534 3.068.152.797.421 1.567.798 2.286.736 1.365 1.534 1.994 3.068 1.656a52.93 52.93 0 005.753-1.61 12.281 12.281 0 003.759-1.918 11.196 11.196 0 002.776-2.93 12.532 12.532 0 001.749-3.713 20.64 20.64 0 00.614-5.584V25.021c0-1.657-1.396-2.194-2.869-2.393a9.607 9.607 0 00-2.731.123c-1.457.337-2.255.859-2.224 2.516.092 5.139 0 10.83 0 15.878M253.13 40.515a7.48 7.48 0 00-1.135-4.035 6.626 6.626 0 00-4.373-2.976l-5.921-1.98v-.72a2.813 2.813 0 01.843-2.102 3.531 3.531 0 012.164-.997l7.271-.875a2.368 2.368 0 001.997-1.8c.073-.31.083-.632.028-.946l-.537-3.467a2.406 2.406 0 00-2.684-2.01l-6.137.783a12.652 12.652 0 00-4.311 1.32 11.636 11.636 0 00-3.298 2.546 10.732 10.732 0 00-2.117 3.482 11.535 11.535 0 00-.752 4.096v6.459l11.291 3.436v.813a3.058 3.058 0 01-.951 2.24 3.283 3.283 0 01-2.332.92h-5.783a4.92 4.92 0 01-3.513-1.38 4.6 4.6 0 01-1.458-3.406v-8.161a2.386 2.386 0 00-.702-1.687 2.374 2.374 0 00-1.691-.691h-2.823a2.376 2.376 0 00-2.408 2.378v9.204a11.713 11.713 0 00.997 4.864 12.54 12.54 0 002.761 3.942 12.8 12.8 0 004.096 2.654 13.15 13.15 0 005.047.967h4.403c1.579 0 3.142-.308 4.603-.905a12.806 12.806 0 003.804-2.47 11.273 11.273 0 003.621-8.162v-1.334zM277.507 42.28h2.808a2.394 2.394 0 002.408-2.378V9.128a2.395 2.395 0 00-2.408-2.378h-2.808a2.394 2.394 0 00-2.408 2.378v30.774a2.396 2.396 0 002.408 2.378zM307.79 26.463l-5.952-10.217a2.38 2.38 0 00-1.496-1.125 2.391 2.391 0 00-1.848.296l-2.44 1.534a2.364 2.364 0 00-.813 3.191l5.723 9.957a2.3 2.3 0 01.168 2.531 2.531 2.531 0 01-2.27 1.043h-5.232c-.598 0-.905-.276-.905-.828v-3.59a2.396 2.396 0 00-2.408-2.378h-1.534a2.39 2.39 0 00-2.221 1.463c-.122.29-.186.6-.188.915v5.247a7.245 7.245 0 00.384 2.362 7.95 7.95 0 001.994 3.069 8.357 8.357 0 002.593 1.672 8.068 8.068 0 003.068.613h4.495a8.927 8.927 0 005.231-1.534 11.048 11.048 0 003.544-3.942 11.491 11.491 0 001.35-5.14 9.634 9.634 0 00-1.304-5.154M263.654 41.066a4.877 4.877 0 01-.921 3.069 4.981 4.981 0 01-2.424 2.163c-1.426.767-4.264 1.012-5.875 1.534-1.611.521-1.78 1.61-1.534 3.068.164.796.438 1.565.813 2.286.736 1.365 1.534 1.994 3.145 1.657 1.91-.432 3.795-.97 5.645-1.611a12.13 12.13 0 003.774-1.918 11.14 11.14 0 002.762-2.93 11.818 11.818 0 001.749-3.712c.463-1.825.675-3.703.629-5.585V25.02c0-1.656-1.397-2.193-2.869-2.393a9.59 9.59 0 00-2.731.123c-1.534.337-2.255.859-2.24 2.516.092 5.14.077 10.83.077 15.878"
                fill="#6D6E71"
              ></path>
              <path
                d="M13.93 42.281h3.068a2.379 2.379 0 002.393-2.378v-3.068a2.377 2.377 0 00-2.393-2.378H13.93a2.394 2.394 0 00-2.409 2.378v3.068a2.394 2.394 0 002.409 2.378zM2.332 42.281H5.4a2.378 2.378 0 002.394-2.378v-3.068A2.378 2.378 0 005.4 34.457H2.332A2.393 2.393 0 000 36.881v3.068a2.393 2.393 0 002.409 2.378M25.528 42.281h3.068a2.378 2.378 0 002.393-2.378v-3.068a2.377 2.377 0 00-2.393-2.378h-3.068a2.393 2.393 0 00-2.409 2.378v3.068a2.392 2.392 0 002.409 2.378z"
                fill="#00A0A1"
              ></path>
              <path
                d="M594.885 41.668a8.195 8.195 0 002.516-1.641 7.937 7.937 0 001.718-2.424c.42-.892.635-1.867.629-2.854V23.152a2.386 2.386 0 00-.702-1.687 2.374 2.374 0 00-1.691-.691h-2.807a2.392 2.392 0 00-2.378 2.378v10.493h-4.449a1.426 1.426 0 01-1.135-.568 1.242 1.242 0 01-.231-1.227l1.274-6.06c.068-.314.072-.639.01-.954a2.357 2.357 0 00-1.062-1.54 2.344 2.344 0 00-.897-.328l-3.068-.507a2.407 2.407 0 00-2.715 1.872l-1.657 7.885a1.735 1.735 0 01-1.841 1.427h-1.81a1.416 1.416 0 01-1.059-.46 1.533 1.533 0 01-.414-1.074v-7.67a2.394 2.394 0 00-2.424-2.348h-2.807a2.39 2.39 0 00-2.221 1.463c-.122.29-.186.6-.188.915v7.67c-.01.392-.169.766-.445 1.044a1.393 1.393 0 01-1.028.49h-3.973a1.408 1.408 0 01-1.059-.46 1.535 1.535 0 01-.429-1.012v-7.778a2.368 2.368 0 00-.702-1.687 2.367 2.367 0 00-1.691-.691h-2.869a2.377 2.377 0 00-2.393 2.378v7.84a1.333 1.333 0 01-.43.966 1.43 1.43 0 01-1.058.414h-11.491a3.347 3.347 0 01-2.363-.92 2.922 2.922 0 01-.981-2.24v-7.533a2.369 2.369 0 00-.702-1.687 2.387 2.387 0 00-1.692-.69h-2.899a2.392 2.392 0 00-2.409 2.377v7.993a10.756 10.756 0 00.936 4.403 11.89 11.89 0 002.501 3.605 11.623 11.623 0 003.728 2.44c1.459.6 3.024.903 4.602.889h9.389c1.22.004 2.433-.193 3.59-.583a7.935 7.935 0 003.068-2.056 8.067 8.067 0 003.068 2.025 9.757 9.757 0 003.498.614h1.365a10.496 10.496 0 003.575-.614 8.102 8.102 0 003.068-1.979 7.988 7.988 0 003.068 1.98c1.135.414 2.336.622 3.544.613a9.205 9.205 0 003.191-.552 7.77 7.77 0 002.884-2.04 6.738 6.738 0 002.639 2.04c.979.376 2.02.563 3.068.552h4.234a7.42 7.42 0 003.068-.614M636.26 26.464l-5.952-10.217a2.421 2.421 0 00-1.505-1.126 2.41 2.41 0 00-1.855.297l-2.424 1.534a2.362 2.362 0 00-.828 3.191l5.737 9.957a2.297 2.297 0 01.154 2.531 2.5 2.5 0 01-2.271 1.043h-5.231c-.599 0-.89-.276-.89-.828v-3.59a2.396 2.396 0 00-2.409-2.378h-1.534a2.376 2.376 0 00-2.393 2.378v5.247a6.882 6.882 0 00.384 2.362 7.777 7.777 0 001.994 3.068 8.197 8.197 0 002.547 1.734 7.96 7.96 0 003.068.614h4.602a8.9 8.9 0 005.232-1.535 11.278 11.278 0 004.893-9.081 9.477 9.477 0 00-1.288-5.155"
                fill="#6D6E71"
              ></path>
              <path
                d="M603.415 41.069a4.791 4.791 0 01-.921 3.068 4.986 4.986 0 01-2.424 2.163c-1.427.767-4.265 1.013-5.875 1.534-1.611.522-1.78 1.611-1.535 3.069.165.795.439 1.564.814 2.285.736 1.366 1.534 1.995 3.068 1.657a53.902 53.902 0 005.737-1.61 12.279 12.279 0 003.698-1.995 11.196 11.196 0 002.776-2.93 12.542 12.542 0 001.826-3.713 21.26 21.26 0 00.614-5.584V24.945c0-1.657-1.396-2.194-2.869-2.393a9.59 9.59 0 00-2.731.123c-1.457.337-2.255.859-2.224 2.516.092 5.139 0 10.83 0 15.878M549.905 11.337V9.235a2.395 2.395 0 00-2.409-2.378h-8.944a2.394 2.394 0 00-2.408 2.378v2.102a2.4 2.4 0 001.491 2.202c.291.118.603.178.917.176h8.944a2.394 2.394 0 002.409-2.378z"
                fill="#6D6E71"
              ></path>
              <path
                d="M64.25 34.012h-6.996a.414.414 0 01-.445-.169.537.537 0 01-.046-.552l.997-4.832h5.66c.241 0 .472.094.645.26a.89.89 0 01.26.66l-.076 4.633zm23.686 5.707a10.231 10.231 0 002.255-3.237 9.556 9.556 0 00.813-3.943v-9.205a2.393 2.393 0 00-2.393-2.316h-2.808a2.394 2.394 0 00-2.408 2.378v9.281a1.336 1.336 0 01-.43.982 1.38 1.38 0 01-1.058.43h-8.515a1.212 1.212 0 01-1.058-.4 1.534 1.534 0 01-.414-1.012V29.61a9.082 9.082 0 00-.767-3.667 9.418 9.418 0 00-2.117-3.114 9.834 9.834 0 00-6.873-2.746H48.908a10.893 10.893 0 00-4.111.783 11.015 11.015 0 00-3.376 2.163 10.233 10.233 0 00-2.255 3.237 9.494 9.494 0 00-.813 3.958v27.4A2.393 2.393 0 0040.746 60h2.87a2.409 2.409 0 002.408-2.378V29.747a1.105 1.105 0 01.445-.92c.292-.231.655-.356 1.027-.353h2.271l-.629 3.452a8.854 8.854 0 00.184 4.019 9.207 9.207 0 001.856 3.482 9.388 9.388 0 003.069 2.394c1.264.6 2.65.905 4.05.89h5.753a8.543 8.543 0 002.5-.384 10.084 10.084 0 002.486-1.135 11.292 11.292 0 005.707 1.534h5.814c1.405.011 2.798-.26 4.096-.798a10.585 10.585 0 003.36-2.148M87.154 11.2V9.083a2.409 2.409 0 00-2.409-2.378h-8.944a2.394 2.394 0 00-2.408 2.378V11.2a2.394 2.394 0 002.408 2.378h8.944a2.409 2.409 0 002.409-2.378zM198.622 22.829a9.832 9.832 0 00-6.857-2.746h-37.647l6.658-7.564a2.394 2.394 0 00-.2-3.344l-1.933-1.703a2.404 2.404 0 00-3.405.2L141.584 23.09l5.446 5.031h45.625c.311 0 .612.114.843.323a1.106 1.106 0 01.369.843v3.82a.756.756 0 01-.338.706c-.183.12-.395.188-.614.2h-61.794a1.305 1.305 0 01-1.12-.476 1.627 1.627 0 01-.215-1.304l1.258-6.137a2.352 2.352 0 00-.368-1.815 2.354 2.354 0 00-1.565-.992l-2.776-.491a2.393 2.393 0 00-2.777 1.856l-1.642 7.901a1.517 1.517 0 01-.644 1.043 1.9 1.9 0 01-1.166.384h-4.955a1.425 1.425 0 01-1.059-.4 1.355 1.355 0 01-.429-1.027V9.083a2.396 2.396 0 00-2.409-2.378h-2.853a2.394 2.394 0 00-2.409 2.378v23.656a9.206 9.206 0 00.829 3.866 9.8 9.8 0 002.194 3.16 10.3 10.3 0 003.283 2.102c1.271.538 2.639.81 4.019.798h2.899c1.11 0 2.212-.198 3.253-.583a7.886 7.886 0 002.93-2.056 6.967 6.967 0 002.654 2.056c.975.391 2.017.59 3.068.583h60.306c1.285.004 2.559-.23 3.759-.69a10.21 10.21 0 003.206-1.949 9.827 9.827 0 002.24-3.068 8.4 8.4 0 00.844-3.774v-3.697a8.935 8.935 0 00-.752-3.682 9.527 9.527 0 00-2.102-2.976z"
                fill="#02AAB5"
              ></path>
              <path
                d="M127.701 11.537h-2.071a2.39 2.39 0 00-2.394 2.378v2.102a2.392 2.392 0 002.394 2.393h2.071a2.394 2.394 0 002.408-2.393v-2.102a2.395 2.395 0 00-2.408-2.378zM94.548 41.068c.05 1.1-.28 2.184-.936 3.069a4.94 4.94 0 01-2.408 2.163c-1.443.767-4.265 1.012-5.876 1.534-1.611.521-1.795 1.61-1.534 3.068a8.84 8.84 0 00.813 2.332 2.531 2.531 0 003.145 1.657c1.911-.447 3.796-1 5.645-1.657a12.136 12.136 0 003.774-1.918 11.397 11.397 0 002.762-2.93 12.17 12.17 0 001.749-3.713 21.31 21.31 0 00.629-5.584V25.021c0-1.657-1.397-2.193-2.87-2.393a9.59 9.59 0 00-2.73.123c-1.534.337-2.255.859-2.24 2.516.092 5.14.077 10.83.077 15.878"
                fill="#02AAB5"
              ></path>
              <path
                d="M511.951 33.553h-7.088a.632.632 0 01-.445-.2.471.471 0 01-.123-.46l.844-4.127c.169-.506.476-.736.89-.705h4.97a.95.95 0 01.952.905v4.587zm4.771-11.2a10.02 10.02 0 00-3.069-1.994 9.675 9.675 0 00-3.804-.751h-2.9a9.728 9.728 0 00-5.983 2.086 8.869 8.869 0 00-2.04 2.301 8.527 8.527 0 00-1.135 2.9l-.952 4.602a7.955 7.955 0 00.123 3.943 9.207 9.207 0 001.826 3.39 9.892 9.892 0 003.16 2.393 9.207 9.207 0 004.05.906h1.948a10.347 10.347 0 002.148-.23 6.142 6.142 0 001.826-.63v.261a3.885 3.885 0 01-1.151 2.9 7.163 7.163 0 01-2.976 1.733l-6.136 1.995a2.378 2.378 0 00-1.535 3.068l.768 2.255a2.389 2.389 0 003.068 1.534l6.136-1.994a13.812 13.812 0 006.904-5.032 13.696 13.696 0 001.933-3.651c.462-1.343.695-2.753.69-4.173V29.027a9.022 9.022 0 00-.767-3.666 9.622 9.622 0 00-2.086-3.069M490.12 12.995A9.938 9.938 0 00487.052 11a9.404 9.404 0 00-3.728-.736h-2.685a9.42 9.42 0 00-2.93.445 9.74 9.74 0 00-3.068 1.641 9.198 9.198 0 00-2.132 2.286 8.513 8.513 0 00-1.166 2.9l-.645 3.16a8.839 8.839 0 00.108 4.065 8.275 8.275 0 001.81 3.376 9.035 9.035 0 003.145 2.3c1.307.564 2.718.847 4.142.83h2.915c.372.01.744-.03 1.104-.124.261-.062.513-.155.752-.276.209-.116.405-.255.583-.414V32.8a1.067 1.067 0 01-.383.905c-.248.211-.566.32-.89.307h-9.481a2.452 2.452 0 01-1.856-.66c-.415-.43-.721-.751-.89-.966-.598-.875-1.197-1.78-1.795-2.685l-1.657-2.546a129.193 129.193 0 01-1.733-2.486 9.332 9.332 0 00-4.25-3.405 10.018 10.018 0 00-5.523-.675l-4.234.675a12.435 12.435 0 00-3.973 1.288 12.68 12.68 0 00-3.36 2.516 12.497 12.497 0 00-2.332 3.483 10.458 10.458 0 00-.859 4.203v5.293l13.592 2.991v.768a3.071 3.071 0 01-.966 2.255 3.29 3.29 0 01-2.363.935h-10.999a4.941 4.941 0 01-1.903-.368 5.584 5.584 0 01-1.534-1.028 4.688 4.688 0 01-1.534-3.436V29.18a2.396 2.396 0 00-2.409-2.378h-2.868a2.377 2.377 0 00-2.394 2.378v12.012a11.525 11.525 0 001.028 4.848 12.903 12.903 0 006.934 6.642c1.603.651 3.318.98 5.048.967h11.168a10.08 10.08 0 004.434-.92 9.703 9.703 0 003.237-2.455 10.58 10.58 0 001.979-3.667c.456-1.49.679-3.043.659-4.602v-1.58a6.963 6.963 0 00-.398-2.332 6.58 6.58 0 00-1.105-2.01 6.456 6.456 0 00-1.718-1.534 5.695 5.695 0 00-2.286-.767l-7.931-1.12v-.614a1.912 1.912 0 01.905-1.641 4.447 4.447 0 012.009-.798l5.6-.813c.565-.069 1.139 0 1.672.2.507.212.939.57 1.243 1.027l4.817 6.536a23.867 23.867 0 001.871 2.485c.567.673 1.216 1.27 1.933 1.78a7.292 7.292 0 002.225 1.074 10.02 10.02 0 002.746.352h7.671c1.406.013 2.8-.264 4.096-.813a10.937 10.937 0 003.359-2.178 10.465 10.465 0 002.256-3.206 9.685 9.685 0 00.813-3.928v-12.64a8.774 8.774 0 00-2.808-6.475v-.015zm-4.802 10.739h-6.826a.614.614 0 01-.507-.23.672.672 0 01-.138-.538l.691-4.126a.919.919 0 011.012-.813h4.909c.233.032.455.122.645.26a.57.57 0 01.214.553v4.894zM460.696 11.337V9.235a2.395 2.395 0 00-2.409-2.378h-8.944a2.394 2.394 0 00-2.408 2.378v2.102a2.397 2.397 0 00.706 1.698 2.388 2.388 0 001.702.695h8.944a2.399 2.399 0 001.702-.695 2.387 2.387 0 00.707-1.698zM488.463 4.48V2.378A2.396 2.396 0 00486.055 0h-8.944a2.39 2.39 0 00-2.221 1.463c-.122.29-.186.6-.188.915V4.48a2.395 2.395 0 002.409 2.378h8.944a2.394 2.394 0 002.408-2.378z"
                fill="#6D6E71"
              ></path>
            </svg>
          </div>
        </Grid>
        <Grid item>
          <Typography component="h6" variant="h6" sx={{ my: 3 }}>
            با آرمان تدبیر، میتونید با اطمینان شروع کنید، هوشمندانه یاد بگیرید و
            در بورس، هدفمند عمل کنید.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained"> به آسانی شروع کنید</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
