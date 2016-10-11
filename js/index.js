$(function(){
    $(window).on("resize",function(){
        $("body").height($(window).height())
    })
    $(window).trigger("resize")

    var audio=$("audio")
    var coll=[
        {"name":"Loser",
            au:"BigBang",
            src:"mp3/BigBang-Loser.mp3",
            "img":"img/3.jpg",
            dur:"04:39",
            geci:[
                {time:"00:00","lrc":"LOSER 외톨이 센 척하는 겁쟁이"},
                {time:"00:05","lrc":""},
                {time:"00:06","lrc":"못된 양아치 거울 속에 넌"},
                {time:"00:10","lrc":"JUST A LOSER 외톨이 상처뿐인 머저리"},
                {time:"00:15","lrc":""},
                {time:"00:16","lrc":"더러운 쓰레기 거울 속에 난 I'M A"},
                {time:"00:22","lrc":"솔직히 세상과 난 어울린 적 없어"},
                {time:"00:25","lrc":"홀로였던 내겐 사랑 따윈 벌써"},
                {time:"00:27","lrc":""},
                {time:"00:27","lrc":"잊혀 진지 오래 저 시간 속에"},
                {time:"00:29","lrc":"더 이상은 못 듣겠어 희망찬 사랑 노래"},
                {time:"00:32","lrc":"너나 나나 그저 길들여진 대로"},
                {time:"00:35","lrc":""},
                {time:"00:35","lrc":"각본 속에 놀아나는 슬픈 삐에로"},
                {time:"00:38","lrc":"난 멀리 와버렸어 I'M COMING HOME"},
                {time:"00:40","lrc":"이제 다시 돌아갈래 어릴 적 제자리로"},
                {time:"00:42","lrc":""},
                {time:"00:43","lrc":"언제부턴가 난"},
                {time:"00:46","lrc":""},
                {time:"00:48","lrc":"하늘 보다 땅을 더 바라보게 돼"},
                {time:"00:51","lrc":""},
                {time:"00:53","lrc":"숨쉬기조차 힘겨워"},
                {time:"00:56","lrc":""},
                {time:"00:59","lrc":"손을 뻗지만 그 누구도"},
                {time:"01:01","lrc":"날 잡아 주질 않네"},
                {time:"01:03","lrc":""},
                {time:"01:04","lrc":"I'M A LOSER"},
                {time:"01:05","lrc":"외톨이 센 척하는 겁쟁이"},
                {time:"01:09","lrc":""},
                {time:"01:09","lrc":"못된 양아치 거울 속에 넌"},
                {time:"01:14","lrc":"JUST A LOSER"},
                {time:"01:15","lrc":""},
                {time:"01:19","lrc":""},
                {time:"01:20","lrc":"더러운 쓰레기 거울 속에 난 I'M A"},
                {time:"01:25","lrc":"반복되는 여자들과의 내 실수"},
                {time:"01:28","lrc":"하룻밤을 사랑하고 해 뜨면 싫증"},
                {time:"01:31","lrc":"책임지지 못 할 나의 이기적인 기쁨"},
                {time:"01:34","lrc":"하나 땜에 모든 것이 망가져버린 지금"},
                {time:"01:36","lrc":"멈출 줄 모르던 나의 위험한 질주"},
                {time:"01:39","lrc":"이젠 아무런 감흥도 재미도 없는 기분"},
                {time:"01:41","lrc":"나 벼랑 끝에 혼자 있네"},
                {time:"01:43","lrc":"I'M GOING HOME"},
                {time:"01:44","lrc":"나 다시 돌아갈래 예전의 제자리로"},
                {time:"01:46","lrc":""},
                {time:"01:47","lrc":"언제부턴가 난"},
                {time:"01:49","lrc":""},
                {time:"01:52","lrc":"사람들의 시선을 두려워만 해"},
                {time:"01:55","lrc":""},
                {time:"01:57","lrc":"우는 것조차 지겨워"},
                {time:"02:00","lrc":""},
                {time:"02:03","lrc":"웃어보지만 그 아무도"},
                {time:"02:05","lrc":"날 알아주질 않네"},
                {time:"02:07","lrc":""},
                {time:"02:07","lrc":"I'M A LOSER"},
                {time:"02:09","lrc":""},
                {time:"02:09","lrc":"외톨이 센 척하는 겁쟁이"},
                {time:"02:13","lrc":""},
                {time:"02:13","lrc":"못된 양아치 거울 속에 넌"},
                {time:"02:18","lrc":"JUST A LOSER 외톨이 상처뿐인 머저리"},
                {time:"02:24","lrc":"더러운 쓰레기 거울 속에 난"},
                {time:"02:28","lrc":""},
                {time:"02:29","lrc":"파란 저 하늘을 원망하지 난"},
                {time:"02:32","lrc":""},
                {time:"02:34","lrc":"가끔 내려놓고 싶어져"},
                {time:"02:37","lrc":"I WANT TO SAY GOOD BYE"},
                {time:"02:39","lrc":""},
                {time:"02:40","lrc":"이 길의 끝에 방황이 끝나면"},
                {time:"02:43","lrc":""},
                {time:"02:45","lrc":"부디 후회 없는 채로 두 눈 감을 수 있길"},
                {time:"02:50","lrc":""},
                {time:"02:51","lrc":"LOSER 외톨이 센 척하는 겁쟁이"},
                {time:"02:56","lrc":"못된 양아치 거울 속에 넌"},
                {time:"03:01","lrc":"JUST A LOSER 외톨이 상처뿐인 머저리"},
                {time:"03:06","lrc":""},
                {time:"03:07","lrc":"더러운 쓰레기 거울 속에 난"},
                {time:"03:11","lrc":""},
                {time:"03:12","lrc":"I'M A LOSER"},
                {time:"03:13","lrc":""},
                {time:"03:17","lrc":"I'M A LOSER"},
                {time:"03:18","lrc":""},
                {time:"03:22","lrc":"I'M A LOSER"},
                {time:"03:23","lrc":""},
                {time:"03:28","lrc":"I'M A LOSER"}
            ]},
        {"name":"眼鼻嘴",
            au:"太阳",
            src:"mp3/眼鼻嘴-太阳.mp3",
            "img":"img/taiyang.jpg",
            dur:"04:50",
            geci:[
                {time:"00:00","lrc":"눈,코,입 - 太阳"},
                {time:"00:07","lrc":"미안해 미안해 하지마"},
                {time:"00:09","lrc":"내가 초라해지잖아"},
                {time:"00:12","lrc":"빨간 예쁜 입술로"},
                {time:"00:15","lrc":"어서 나를 죽이고 가"},
                {time:"00:17","lrc":"나는 괜찮아"},
                {time:"00:19","lrc":"마지막으로 나를 바라봐줘"},
                {time:"00:22","lrc":"아무렇지 않은 듯 웃어줘"},
                {time:"00:25","lrc":"네가 보고 싶을 때"},
                {time:"00:28","lrc":"기억할 수 있게"},
                {time:"00:29","lrc":"나의 머릿속에 네 얼굴"},
                {time:"00:32","lrc":"그릴 수 있게"},
                {time:"00:34","lrc":""},
                {time:"00:35","lrc":"널 보낼 수 없는 나의 욕심이"},
                {time:"00:38","lrc":"집착이 되어 널 가뒀고"},
                {time:"00:41","lrc":"혹시 이런 나 땜에 힘들었니"},
                {time:"00:44","lrc":"아무 대답 없는 너"},
                {time:"00:47","lrc":""},
                {time:"00:48","lrc":"바보처럼 왜"},
                {time:"00:50","lrc":""},
                {time:"00:52","lrc":"너를 지우지 못해"},
                {time:"00:54","lrc":""},
                {time:"00:55","lrc":"넌 떠나버렸는데"},
                {time:"00:57","lrc":""},
                {time:"00:59","lrc":"너의 눈 코 입"},
                {time:"01:02","lrc":"날 만지던 네 손길"},
                {time:"01:04","lrc":"작은 손톱까지 다"},
                {time:"01:07","lrc":""},
                {time:"01:09","lrc":"여전히 널 느낄 수 있지만"},
                {time:"01:12","lrc":"꺼진 불꽃처럼"},
                {time:"01:16","lrc":"타들어가버린"},
                {time:"01:16","lrc":""},
                {time:"01:18","lrc":"우리 사랑 모두 다"},
                {time:"01:21","lrc":""},
                {time:"01:23","lrc":"너무 아프지만 이젠 널"},
                {time:"01:25","lrc":""},
                {time:"01:25","lrc":"추억이라 부를게"},
                {time:"01:27","lrc":""},
                {time:"01:30","lrc":"사랑해 사랑했지만"},
                {time:"01:32","lrc":"내가 부족했었나 봐"},
                {time:"01:35","lrc":"혹시 우연이라도"},
                {time:"01:38","lrc":"한순간만이라도 널"},
                {time:"01:40","lrc":"볼 수 있을까"},
                {time:"01:42","lrc":""},
                {time:"01:43","lrc":"하루하루가 불안해져"},
                {time:"01:45","lrc":"네 모든 게 갈수록 희미해져"},
                {time:"01:49","lrc":"사진 속에 너는 왜"},
                {time:"01:51","lrc":"해맑게 웃는데"},
                {time:"01:53","lrc":"우리에게 다가오는"},
                {time:"01:55","lrc":"이별을 모른 채"},
                {time:"01:57","lrc":""},
                {time:"01:58","lrc":"널 보낼 수 없는 나의 욕심이"},
                {time:"02:01","lrc":"집착이 되어 널 가뒀고"},
                {time:"02:04","lrc":""},
                {time:"02:05","lrc":"혹시 이런 나 땜에 힘들었니"},
                {time:"02:08","lrc":"아무 대답 없는 너"},
                {time:"02:10","lrc":""},
                {time:"02:12","lrc":"바보처럼 "},
                {time:"02:13","lrc":""},
                {time:"02:16","lrc":"너를 지우지 못해"},
                {time:"02:17.","lrc":""},
                {time:"02:19","lrc":"넌 떠나버렸는데"},
                {time:"02:20","lrc":""},
                {time:"02:23","lrc":"너의 눈 코 입"},
                {time:"02:25","lrc":"날 만지던 네 손길"},
                {time:"02:28","lrc":"작은 손톱까지 다"},
                {time:"02:30","lrc":""},
                {time:"02:33","lrc":"여전히 널 느낄 수 있지만"},
                {time:"02:35","lrc":""},
                {time:"02:36","lrc":"꺼진 불꽃처럼"},
                {time:"02:39","lrc":"타들어가버린"},
                {time:"02:41","lrc":"우리 사랑 모두 다"},
                {time:"02:43","lrc":""},
                {time:"02:46","lrc":"너무 아프지만 이젠 널"},
                {time:"02:49","lrc":"추억이라 부를게"},
                {time:"02:50","lrc":""},
                {time:"03:03","lrc":"나만을 바라보던 너의 까만 눈"},
                {time:"03:06","lrc":""},
                {time:"03:06","lrc":"향기로운 숨을 담은 너의 코"},
                {time:"03:09","lrc":""},
                {time:"03:09","lrc":"사랑해 사랑해"},
                {time:"03:12","lrc":""},
                {time:"03:13","lrc":"내게 속삭이던 그 입술을 난.."},
                {time:"03:15","lrc":""},
                {time:"03:18","lrc":"너의 눈 코 입"},
                {time:"03:20","lrc":"날 만지던 네 손길"},
                {time:"03:23","lrc":"작은 손톱까지 다"},
                {time:"03:25","lrc":""},
                {time:"03:27","lrc":"여전히 널 느낄 수 있지만"},
                {time:"03:30","lrc":"꺼진 불꽃처럼"},
                {time:"03:33","lrc":"타들어가버린"},
                {time:"03:37","lrc":"우리 사랑 모두 다"},
                {time:"03:39","lrc":""},
                {time:"03:41","lrc":"너무 아프지만 이젠 널"},
                {time:"03:44","lrc":"추억이라 부를게"},
                {time:"03:48","lrc":""}
            ]},
        {"name":"我们俩",
            au:"郭顶",
            src:"mp3/我们俩.mp3",
            "img":"img/guoding.jpg",
            dur:"03:14",
            "geci":[{time:"00:00","lrc":"郭顶 - 我们俩"},
                {time:"00:01","lrc":"你在左边 我紧靠右"},
                {time:"00:04","lrc":"第一张照片"},
                {time:"00:06","lrc":"不太敢亲密的"},
                {time:"00:08","lrc":"属于我们俩的"},
                {time:"00:10","lrc":"脸庞太天真了"},
                {time:"00:12","lrc":"苹果一样带甜的羞涩"},
                {time:"00:16","lrc":"太多感触 已不同了"},
                {time:"00:20","lrc":"世界变了 还是我改变了"},
                {time:"00:24","lrc":"夹在书本这相册"},
                {time:"00:27","lrc":"滑落的照片让我变沉默"},
                {time:"00:32","lrc":"太久 太久 是否过了太久"},
                {time:"00:36","lrc":"忘了 忘了 开始怎开始的"},
                {time:"00:40","lrc":"喝醉了小河边唱着歌"},
                {time:"00:45","lrc":"永远爱你是我说过"},
                {time:"00:48","lrc":"没有 没有 再没谁能拥有"},
                {time:"00:52","lrc":"像你 像我 哭和笑都懂得"},
                {time:"00:57","lrc":"再触摸 我心底藏了好久"},
                {time:"01:01","lrc":"那最柔软的角落"},
                {time:"01:06","lrc":""},
                {time:"01:08","lrc":"郭顶 - 我们俩"},
                {time:"01:11","lrc":""},
                {time:"01:13","lrc":"作词：张莹 作曲：郭顶"},
                {time:"01:16","lrc":""},
                {time:"01:17","lrc":"LRC编辑：习 QQ：335020326"},
                {time:"01:20","lrc":""},
                {time:"01:22","lrc":"你在左边 我紧靠右"},
                {time:"01:26","lrc":"第一张照片"},
                {time:"01:28","lrc":"不太敢亲密的"},
                {time:"01:30","lrc":"属于我们俩的"},
                {time:"01:32","lrc":"脸庞太天真了"},
                {time:"01:34","lrc":"苹果一样带甜的羞涩"},
                {time:"01:38","lrc":"太多感触 已不同了"},
                {time:"01:42","lrc":"世界变了 还是我改变了"},
                {time:"01:46","lrc":"夹在书本这相册"},
                {time:"01:49","lrc":"滑落的照片让我变沉默"},
                {time:"01:53","lrc":"太久 太久 是否过了太久"},
                {time:"01:58","lrc":"忘了 忘了 开始怎开始的"},
                {time:"02:02","lrc":"喝醉了小河边唱着歌"},
                {time:"02:06","lrc":"永远爱你是我说过"},
                {time:"02:10","lrc":"没有 没有 再没谁能拥有"},
                {time:"02:14","lrc":"像你 像我 哭和笑都懂得"},
                {time:"02:19","lrc":"再触摸 我心底藏了好久"},
                {time:"02:23","lrc":"那最柔软的角落"},
                {time:"02:26","lrc":"太久 太久 是否过了太久"},
                {time:"02:30","lrc":"忘了 忘了 开始怎开始的"},
                {time:"02:34","lrc":"喝醉了小河边唱着歌"},
                {time:"02:39","lrc":"永远爱你是我说过"},
                {time:"02:42","lrc":"没有 没有 再没谁能拥有"},
                {time:"02:46","lrc":"像你 像我 哭和笑都懂得"},
                {time:"02:51","lrc":"再触摸 我心底藏了好久"},
                {time:"02:55","lrc":"那最柔软的角落"}
            ]},
        {"name":"丑八怪",
            au:"薛之谦",
            src:"mp3/薛之谦-丑八怪.mp3",
            "img":"img/xuezhiqian.jpg",
            dur:"04:08",
            geci:[
                {time:"00:01","lrc":"丑八怪 - 薛之谦"},
                {time:"00:03","lrc":"词 ：甘世佳"},
                {time:"00:04","lrc":"曲 ：李荣浩"},
                {time:"00:05","lrc":""},
                {time:"00:20","lrc":"如果世界漆黑 其实我很美"},
                {time:"00:23","lrc":"在爱情里面进退 最多被消费"},
                {time:"00:27","lrc":"无关痛痒的是非 又怎么不对 无所谓"},
                {time:"00:35","lrc":"如果像你一样 总有人赞美"},
                {time:"00:39","lrc":"围绕着我的卑微 也许能消退"},
                {time:"00:43","lrc":"其实我并不在意 有很多机会"},
                {time:"00:46","lrc":"像巨人一样的无畏 放纵我 心里的鬼"},
                {time:"00:51","lrc":"可是我不配"},
                {time:"00:54","lrc":"丑八怪 能否别把灯打开"},
                {time:"01:02","lrc":"我要的爱 出没在 漆黑一片的舞台"},
                {time:"01:09","lrc":"丑八怪 在这暧昧的时代"},
                {time:"01:17","lrc":"我的存在 像意外"},
                {time:"01:25","lrc":""},
                {time:"01:37","lrc":"有人用一滴泪 会红颜祸水"},
                {time:"01:41","lrc":"有人丢掉称谓 什么也不会"},
                {time:"01:45","lrc":"只要你足够虚伪 就不怕魔鬼 对不对"},
                {time:"01:52","lrc":"如果剧本写好 谁比谁高贵"},
                {time:"01:56","lrc":"我只能沉默以对 美丽本无罪"},
                {time:"02:00","lrc":"当欲望开始贪杯 有更多机会"},
                {time:"02:04","lrc":"像尘埃一样的无畏 化成灰 谁认得谁"},
                {time:"02:08","lrc":"管他配不配"},
                {time:"02:12","lrc":"丑八怪 能否别把灯打开"},
                {time:"02:19","lrc":"我要的爱 出没在 漆黑一片的舞台"},
                {time:"02:26","lrc":"丑八怪 在这暧昧的时代"},
                {time:"02:34","lrc":"我的存在 不意外"},
                {time:"02:41","lrc":""},
                {time:"03:01","lrc":"丑八怪 其实见多就不怪"},
                {time:"03:09","lrc":"放肆去High 用力踩 那不堪一击的洁白"},
                {time:"03:17","lrc":"丑八怪 这是我们的时代"},
                {time:"03:25","lrc":"我不存在 才意外"},
                {time:"03:26","lrc":""},
            ]},
        {"name":"咬住下唇",
            au:"Esna",
            src:"mp3/电视原声-咬住下唇.mp3",
            "img":"img/jichengzhemen.jpg",
            dur:"04:42",
            geci:[
                {time:"00:00","lrc":"365音乐网：www.yue365.com"},
                {time:"00:00","lrc":"Esna - 咬住下唇"},
                {time:"00:02","lrc":"歌词编辑：冷风"},
                {time:"00:12","lrc":"아랫입술 몰래 물고 눈 지그시 감지"},
                {time:"00:18","lrc":"내 몸을 채워오는 설렘을 감춰"},
                {time:"00:24","lrc":"왠지 자꾸 간지러워 널 생각하면"},
                {time:"00:30","lrc":"혼자 말을 건네게 돼"},
                {time:"00:35","lrc":"Give me a perfect day"},
                {time:"00:38","lrc":"Oh I'll stay, by your side"},
                {time:"00:42","lrc":"난 벌써 내 맘 반을 들킨 걸"},
                {time:"00:47","lrc":"기대해도 좋은 날이 올 거야"},
                {time:"00:53","lrc":"좋은 일만 잔뜩 다가올 거야"},
                {time:"00:59","lrc":"힘든 나를 지켜 바라봐 줄 한 사람"},
                {time:"01:05","lrc":"너인 것 같은 기분 드는 걸"},
                {time:"01:11","lrc":"I wanna make you mine forever"},
                {time:"01:23","lrc":"끊어질 듯 이어지는 해맑은 웃음"},
                {time:"01:30","lrc":"눈 떠보면 내 것인 걸"},
                {time:"01:35","lrc":"Give me a perfect day"},
                {time:"01:38","lrc":" Oh I'll stay, by your side"},
                {time:"01:42","lrc":"난 벌써 내 맘 반을 들킨 걸"},
                {time:"01:47","lrc":"기대해도 좋은 날이 올 거야"},
                {time:"01:53","lrc":"좋은 일만 잔뜩 다가올 거야"},
                {time:"01:59","lrc":"힘든 나를 지켜 바라봐 줄 한 사람"},
                {time:"02:05","lrc":"너인 것 같은 기분 드는 걸"},
                {time:"02:11","lrc":"I wanna make you mine"},
                {time:"02:35","lrc":"분명 좋은 사람 만난 걸 거야"},
                {time:"02:41","lrc":"멋진 일만 잔뜩 챙겨줄 거야"},
                {time:"02:47","lrc":"사랑 하나로도 충분할 것 같은 걸"},
                {time:"02:53","lrc":"Nothing's better, better than I love"},
                {time:"03:00","lrc":"기대해도 좋을 사랑일 거야"},
                {time:"03:05","lrc":"좋은 일만 잔뜩 다가올 거야"},
                {time:"03:11","lrc":"힘든 나를 지켜 바라봐 줄 한 사람"},
                {time:"03:17","lrc":"너인 것 같은 기분 드는 걸"},
                {time:"03:23","lrc":"I wanna make you mine"}
            ]},
        {"name":"机器铃 砍菜刀",
            au:"张卫",
            src:"mp3/网络歌手-机器铃 砍菜刀(张卫).mp3",
            dur:"08:27",
            "img":"img/jiqiling.jpg"},
        {"name":"Bae Bae",
            au:"BigBang",
            src:"mp3/BigBang-Bae Bae.mp3",
            dur:"03:49",
            "img":"img/bigbang1.jpg"},
        {"name":"平凡之路",
            au:"朴树",
            src:"mp3/朴树-平凡之路 (电影《后会无期》主题歌).mp3",
            "img":"img/pushu.jpg",
            dur:"05:02",
            geci:[
                {time:"00:00","lrc":"朴树"},
                {time:"00:00","lrc":"后会无期主题歌"},
                {time:"00:02","lrc":"朴树 - 平凡之路"},
                {time:"00:03","lrc":"作词：韩寒 朴树"},
                {time:"00:05","lrc":"作曲：朴树 编曲：朴树"},
                {time:"00:07","lrc":"歌词分享QQ122121036"},
                {time:"00:10","lrc":"www.22lrc.com ★"},
                {time:"00:12","lrc":"徘徊着的 在路上的"},
                {time:"00:17","lrc":"你要走吗"},
                {time:"00:23","lrc":"易碎的 骄傲着"},
                {time:"00:28","lrc":"那也曾是我的模样"},
                {time:"00:34","lrc":"沸腾着的 不安着的"},
                {time:"00:40","lrc":"你要去哪"},
                {time:"00:46","lrc":"谜一样的 沉默着的"},
                {time:"00:51","lrc":"故事你真的在听吗"},
                {time:"00:56","lrc":"我曾经跨过山和大海"},
                {time:"00:59","lrc":"也穿过人山人海"},
                {time:"[01:02","lrc":"我曾经拥有着一切"},
                {time:"01:05","lrc":"转眼都飘散如烟"},
                {time:"01:07","lrc":"我曾经失落失望失掉所有方向"},
                {time:"01:13","lrc":"直到看见平凡才是唯一的答案"},
                {time:"01:31","lrc":"当你仍然"},
                {time:"01:33","lrc":"还在幻想"},
                {time:"01:37","lrc":"你的明天"},
                {time:"01:43","lrc":"她会好吗 还是更烂"},
                {time:"01:49","lrc":"对我而言是另一天"},
                {time:"01:53","lrc":"我曾经毁了我的一切"},
                {time:"01:56","lrc":"只想永远地离开"},
                {time:"01:59","lrc":"我曾经堕入无边黑暗"},
                {time:"02:02","lrc":"想挣扎无法自拔"},
                {time:"02:04","lrc":"我曾经象你象他象那野草野花"},
                {time:"02:10","lrc":"绝望着 渴望着"},
                {time:"02:13","lrc":"也哭也笑平凡着"},
                {time:"03:03","lrc":"向前走 就这么走"},
                {time:"03:06","lrc":"就算你被给过什么"},
                {time:"03:09","lrc":"向前走 就这么走"},
                {time:"03:11","lrc":"就算你被夺走什么"},
                {time:"03:14","lrc":"向前走 就这么走"},
                {time:"03:17","lrc":"就算你会错过什么"},
                {time:"03:20","lrc":"向前走 就这么走"},
                {time:"03:23","lrc":"就算你会"},
                {time:"03:25","lrc":"我曾经跨过山和大海"},
                {time:"03:28","lrc":"也穿过人山人海"},
                {time:"03:30","lrc":"我曾经拥有着一切"},
                {time:"03:33","lrc":"转眼都飘散如烟"},
                {time:"03:36","lrc":"我曾经失落失望失掉所有方向"},
                {time:"03:42","lrc":"直到看见平凡才是唯一的答案"},
                {time:"03:47","lrc":"我曾经毁了我的一切"},
                {time:"03:50","lrc":"只想永远地离开"},
                {time:"03:53","lrc":"我曾经堕入无边黑暗"},
                {time:"03:56","lrc":"想挣扎无法自拔"},
                {time:"03:59","lrc":"我曾经象你象他象那野草野花"},
                {time:"04:04","lrc":"绝望着 渴望着 也哭也笑平凡着"},
                {time:"04:10","lrc":"我曾经跨过山和大海"},
                {time:"04:13","lrc":"也穿过人山人海"},
                {time:"04:16","lrc":"我曾经问遍整个世界"},
                {time:"04:19","lrc":"从来没得到答案"},
                {time:"04:22","lrc":"我不过象你象他象那野草野花"},
                {time:"04:27","lrc":"冥中这是我 唯一要走的路啊"},
                {time:"04:34","lrc":"时间无言"},
                {time:"04:36","lrc":"如此这般"},
                {time:"04:40","lrc":"明天已在眼前"},
                {time:"04:46","lrc":"风吹过的 路依然远"},
                {time:"04:51","lrc":"你的故事讲到了哪"},
            ]},
        {"name":"等一会洗澡",
            au:"Gary",
            src:"mp3/等一会洗澡-Gary.mp3",
            dur:"04:00",
            "img":"img/gary.jpg"},
        {"name":"一次就好",
            au:"杨宗纬",
            src:"mp3/杨宗纬-一次就好-(电影《夏洛特烦恼》暖水曲).mp3",
            "img":"img/yangzongwei.jpg",
            dur:"04:27",
        },
        {"name":"I",
            au:"金泰妍",
            src:"mp3/I-金泰妍_Verbal_Jint.mp3",
            "img":"img/jintaiyan.jpg",
            dur:"03:26",
        },
        {"name":"What Do You Mean",
            au:"Justin Bieber",
            src:"mp3/Justin Bieber-What Do You Mean-.mp3",
            "img":"img/bieber.jpg",
            dur:"03:26",
        },
        {"name":"认真的雪",
            au:"薛之谦",
            src:"mp3/薛之谦-认真的雪.mp3",
            "img":"img/xuezhiqian.jpg",
            dur:"04:19",
        },
        {"name":"离别10分前",
            au:"郑俊英",
            src:"mp3/离别10分前-郑俊英.mp3",
            "img":"img/zhengjunying.jpg",
        dur:"04:25",
        },
    ]
    var songNames=$(".song_id")
    var nowSong=0;
    var geci=$(".gecimask .geci")

    function draw(){
        songNames.html("")
        geci.html("")
        $.each(coll,function(i,v){
           if(i == nowSong){
               if(i + 1 <10){
                   var songIndex = "0" + ( i + 1)
               }else{
                   var songIndex =  i + 1
               }
               $("<li class='song_content now'>").html("<span>" + songIndex + "</span><span>" + v.au + "</span><span>" + v.name + "</span><span>" + v.dur + "</span>").appendTo(songNames)
           }else{
               if(i + 1 <10){
                   var songIndex = "0" + ( i + 1)
               }else{
                   var songIndex =  i + 1
               }
               $("<li class='song_content'>").html("<span>" + songIndex + "</span><span>" + v.au + "</span><span>" + v.name + "</span><span>" + v.dur + "</span>").appendTo(songNames)
           }
       })
        audio.get(0).src = coll[nowSong].src
        $(".song_name").text(coll[nowSong].name + " -- " + coll[nowSong].au)
        $(".song-pro .all-time").text(coll[nowSong].dur)
        $(".bottom .b_r .b_r-middle .b_r-tx").css("backgroundImage","url("+coll[nowSong].img+")");
        $(".mask").css("backgroundImage","url("+coll[nowSong].img+")");
    }
    draw()
    function meil2second(time){
        var h = Math.round(time/60)
        var m = Math.round(time%60)
        if(h < 10 ){
            h = "0" + h
        }
        if(m < 10 ){
            m = "0" + m
        }
        return h + ":" + m
    }

    songNames.on("click","li",function(){
            nowSong = $(this).index()
            draw()
            audio.get(0).play()
    })

    audio.on("play",function(){
        $(".bottom .b_l .play").addClass("active")
    })
    audio.on("pause",function(){
        $(".bottom .b_l .play").removeClass("active")
    })
    audio.on("timeupdate",function(){

        var timeProW=$(".time_pro").width() * (audio.get(0).currentTime / audio.get(0).duration)
        $(".time_pro .time_current").width(timeProW - $(".time-tit").width())
        $(".song-pro .current").text(meil2second(audio.get(0).currentTime))

        $.each(coll[nowSong],function(i,v){
            if(i == "geci"){
                $.each(v,function(a,b){
                    if(b.time == meil2second(audio.get(0).currentTime)){
                        geci.html("")
                        for(var c = a-7;c<v.length;c++){
                            if(c<0){
                                $("<li>").text("").appendTo(geci);
                            }else  if(c == a){
                                $("<li class='nowTime'>").text(v[c].lrc).appendTo(geci)
                            }else{
                                $("<li>").text(v[c].lrc).appendTo(geci)
                            }
                        }
                    }
                })
            }else if(!(coll[nowSong].geci)){
                geci.html("")
                for(var c =0;c<=7;c++){
                    if(c<7){
                        $("<li>").text("").appendTo(geci);
                    }else  if(c == 7){
                        $("<li class='nowTime'>").text("未查找到该歌曲信息").appendTo(geci)
                    }
                }
            }
        })


    })
    audio.on("volumechange",function(){
        var voNowH = audio.get(0).volume * $(".vo_pro").height() - $(".vo_tit").height()
        $(".vo_now").height(voNowH)
        if(audio.get(0).volume == 0){
            $(".voice").addClass("quite")
        }else{
            $(".voice").removeClass("quite")
        }
    })

    $(".bottom .b_l .play").on("click",function(){
        $(this).toggleClass("active")
        if(audio.get(0).paused){
            audio.get(0).play()
        }else{
            audio.get(0).pause()
        }
    })

    $(".bottom .b_l .up").on("click",function(){
        nowSong--;
        if(nowSong == -1){
            nowSong = coll.length-1
        }
        draw()
        audio.get(0).play()
    })
    $(".bottom .b_l .down").on("click",function(){
        nowSong++;
        if(nowSong == coll.length ){
            nowSong = 0
        }
        draw()
        audio.get(0).play()
    })

    var timeTit=$(".time-tit")

    timeTit.on("mousedown",function(){
        $(document).on("mousemove",".time_pro",function(e){
              var per = e.offsetX / $(".time_pro").width()
              audio.get(0).currentTime = per * audio.get(0).duration
              $(".time_pro .time_current").width(e.offsetX - $(".time-tit").width())
        })
    })

    $(".time_pro").on("click",function(e){
        var per = e.offsetX / $(".time_pro").width()
        audio.get(0).currentTime = per * audio.get(0).duration
        $(".time_pro .time_current").width(e.offsetX - $(".time-tit").width())
    })

    $(document).on("mouseup",function(){
        $(document).off("mousemove")
    })

    $(".bottom .b_r .b_r-middle .b_r-tx").on("click",function(){
        $(".mask").slideToggle()
        $(this).find(".b_r_tx_mask").toggleClass("close")
    })

    $(".time_pro").on("mousemove",function(e){
        var percenteage = e.offsetX / $(this).width()
        var cur = audio.get(0).duration * percenteage
        $(this).attr("title",meil2second(cur))
    })

    $(".middle .m_r .song_id").on("mousemove","li",function(){
        $(this).attr("title","歌手:" + $(this).find("span").eq(1).text() + "\n歌曲:" + $(this).find("span").eq(2).text() + "\n总时长:" + $(this).find("span").eq(3).text())
    })

    $(".vo_pro").on("click",function(e){
        event.preventDefault()
        event.stopPropagation()
        audio.get(0).volume =1 -  e.offsetY / $(".vo_pro").height()
    })
    var votit = $(".vo_pro .vo_tit")
        votit.on("mousedown",function(e){
            event.stopPropagation()
            event.preventDefault()
          $(document).on("mousemove",".vo_pro",function(e){
             audio.get(0).volume =1 - e.offsetY / $(".vo_pro").height()
             console.log(e.offsetY / $(".vo_pro").height())
          })
    })
    $(document).on("mouseup",".vo_pro",function(){
        $(document).off("mousedown")
    })
    $(".voice").on("mouseenter mouseleave",function(){
        $(".voice .vo_mask").fadeToggle()
    })
    $(".voice").on("click",function(){
        $(this).toggleClass("quite")
        if($(this).hasClass("quite")){
            audio.attr("prev",audio.get(0).volume)
            audio.get(0).volume=0
        }else{
            audio.get(0).volume=audio.attr("prev")
            audio.removeAttr("prev")
        }
    })

})
