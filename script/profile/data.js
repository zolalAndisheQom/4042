const user = {
    40313166024 :"13840718",
    6818 : "110"
}
const cofing=[
        157 , 163 , 167 , 173 , 179 , 181 , 191 , 193 , 197 , 199 ,
        211 , 223 , 227 , 229 , 233 , 239 , 241 , 251 , 257 , 263 ,
        269 , 271 , 277 , 281 , 283 , 293 , 307 , 311 , 313 , 317 , 331 ,
        337 , 347 , 349 , 353 , 359 , 367 , 373 , 379 , 383 , 389 , 397 ,
        401 , 409 , 419 , 421 , 431 , 433 , 439 , 443 , 449 , 457 , 461 ,
        463 , 467 , 479 , 487 , 491 , 499 , 503 , 509 , 521 , 523 , 541 ,
        547 , 557 , 563 , 569 , 571 , 577 , 587 , 593 , 599 , 60 , 607 ,
        613 , 617 , 619 , 631 , 641 , 643 , 647 , 653 , 659 , 661 , 673 ,
        677 , 683 , 691 , 701 , 709 , 719 , 727 , 733 , 739 , 743 , 751 ,
        757 , 761 , 769 , 773 , 787 , 797 , 809 , 811 , 821 , 823 , 827 ,
        829 , 839 , 853 , 857 , 859 , 863 , 877 , 881 , 883 , 887 , 907 ,
        911 , 919 , 929 , 937 , 941 , 947 , 953 , 967 , 971 , 977 , 983 ,
        991 , 997 , 1009 , 1013 , 1019 , 1021 , 1031 , 1033 , 1039 , 1049 , 
        1051 , 1061 , 1063 , 1069 , 1087 , 1091 , 1093 , 1097 , 1103 , 1109 , 
        1117 , 1123 , 1129 , 1151 , 1153 , 1163 , 1171 , 1181 , 1187 , 1193 , 
        1201 , 1213 , 1217 , 1223 , 1229 , 1231 , 1237 , 1249 , 1259 , 1277 , 
        1279 , 1283 , 1289 , 1291
]

const audio_safari = [
    "audio/A2E2.mp3",
    "audio/E3-Andishe.mp3"
]
const Link_safari =[
    "https://adobe.qom.ac.ir/pz45cb64jw94/",
    "https://adobe.qom.ac.ir/p9wck2uvrd7w/",
    "https://adobe.qom.ac.ir/pew69fffvyjr/",
    "https://adobe.qom.ac.ir/p003135nl3rf/",
    "https://adobe.qom.ac.ir/p4act8wf7mz7/",
    "https://adobe.qom.ac.ir/p6lgqty0x4bh/"
]

const Link_tahri = [
    "https://adobe.qom.ac.ir/pir3w5095fju/",
"https://adobe.qom.ac.ir/ptgltug2hcow/",
"https://adobe.qom.ac.ir/pox4juurrgyj/",
"https://adobe.qom.ac.ir/plsiszdw26zm/",
"https://adobe.qom.ac.ir/pez3fci1ykh5/",
"https://adobe.qom.ac.ir/pn5ogrrtfhup/"
]
const audio_tahri = [
    "audio/GE2.mp3",
    "audio/E3-Garyan.mp3",
    "audio/E4-Garyan.mp3",
    "audio/E5-Garyan_01.mp3"
] 
const teachers= {
    Safari : {"استاد" : "حجت الاسلام صفاریان و عیسوند", "ترم" : "4032", "فایل‌های آپلود شده" : tofarsi(audio_safari.length+Link_safari.length,"فایل")},
    Taheri :  {"استاد" : "دکتر طاهری", "ترم" : "4032", "فایل‌های آپلود شده" : tofarsi(audio_tahri.length+Link_tahri.length,"فایل")}
}

function tofarsi(number,pas = "",ohm =false) {
    number--
    const ohm_F = [
        "اول","دوم","سوم","چهارم","پنجم","ششم","هفتم","هشتم","نهم","دهم","یازدهم",
        "دوازدهم","سیزدهم"
    ]
    const num = [
        "یک","دو","سه ","چهار","پنج","شش","هفت","هشت","نه","ده","یازده","دوازده",
        "ذوازده"
    ]
    if (ohm) {
        return pas+" "+ohm_F[number]
    }else{
        return num[number]+" "+pas
    }
}
