//Function that gets us the data here, that is what a controller does.
const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('user').find();
    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists[0]);
    });
};

module.exports = { getData };

// const data = {
//     professionalName: "Austin Campbell",
//     nameLink: {
//         firstName: "Austin",
//         url: "https://fixme.app/",
//     },
//     base64Image: 
//         `
//         /9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX
//         1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCI
//         FhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAA
//         AAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAA
//         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
//         AAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFla
//         AAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJ
//         DAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAA
//         AAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmY
//         AAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxAD
//         b/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCI
//         oOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAEuAO8DASIAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAA
//         AAAAAECAwUEBgcI/8QARRAAAQMCBAIHAwkGBQMFAAAAAQACAwQRBRIhMUFRBhMiYXGBkRQyoQczNEJSU3KxwSSCktHh8BUjQ2KiFlSDRGST0vH/xAAZAQEB
//         AQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAQEAAgIBBQEBAAAAAAAAAQIRAyESMUEEEyJCUTJS/9oADAMBAAIRAxEAPwDCTCimCvG9qSd1EFM7FFVGNj5y
//         HC91f7LTD6l1SD+0jzV5sSASQLcEQvZqX7s/BHUUvCNI9XwzFKzD9SQonU+qp/uwjLB921LK0/6MhRkH/bvQ6D1IHzY0RePgxvmjJ/7d3mUZdfo4HiUOnnjH
//         1GqQmYNms9FG9tBBF45gpDN9iAf+QfzQ6PaGjbIP3Qj2kX0yfwBMZ+VP63Ug6UbSU49UOoGrPC38A/kl7U/g53orc8hFjPCP3HH9Ei53Gqh/+F//ANUOq/a
//         pvtv8rp+01B4y/FSzn/vGeUJ/kl1g41npEP1Q6j11Q4aCU+ZUc8xOrJD4lSMzR/6uT+AD9VA1EfGqm/4/zRenaU6dW71SLJuEfxCgainJ1qZT5t/mkail+/
//         lP74ROrA2f7u3mols3K3mqTUU1/nHn9/8Aog1VEOD3f+X+iL1daXu9UZZTxaFz+2UY/wBJ38Z/komtpfunepROuvJJ94weaeV43mYuL26n+5Phl/qn/iEA2
//         pgP3f6pxerrpgqKYKIldS+qfBQUuCCF/wBpAV/1m+K57/tLfBXH3mfiQVVtY6jp2yNu4l4bYHmuX/FaiQ6AeqnirS6iFtbSg/8AJcMQV56Zrq9tqTxb/CEe
//         11R4t/gCrCYQT9pqftgeQR7RU8ZFFJBMT1AFhK4eaRlqDvM71SF1GWWOBhfLI1gHMoJ5pjvM4/vIzSfeOWTP0ghjdlhhMg+0TlVIxuslcTDStLRwDSfitzx
//         6rPykbfb4yO9Usp3zH1WQ3Hpo3AVNIWg8rj81102LUlScuYxu4B+l/NS41CaldeW+5J80ZApkaX4KKy2jkajI1SSRKjkbySyDkpIQRyjkiwTO6SAsOSLIQiw
//         0ISQd6kCoXTuoqwFSCrCkCgh/rsKvd7zfxLnJtMxXPPu/iQc+IG9G7ud+q4GLvxD6HJ+IH4hcDFYzVqAUr6JX1VE7hUVdbFRR55CST7rRuUqmpbSQOlfc20D
//         RxK81U1MlVM6WR2p4cAt4z1jWuOipxWqqDo8xt4NZp8VTSPpzP+2dYWni38zzVCO9eiSRxtteywmgp3CWShkpC2GPrHzHK7I3QcRm3IGyrlpo2kv9ohJOpy
//         g3JPkPgtodFcHh6JuxCgfLJKylY+Yykt7ZIJAGXYeK1anozQVVFgEFBS5J8XuXufJmMTG6kgi1yrexrMnO15GChdPPExslJI/NZrX21J7jouPE8Jg653Wti
//         pXtcQ/LZjQRuN7XHcve1fQ7C24vhBppZDQ1VVJTvcyUhxLSePA6FeR6cdFqPBab2xtVIKqSrezqJHhzpI9SJLjXxvxTlNST6eWdVS0kpZTVjnsbsWk29Cu6
//         m6QOuG1TA4fbaLH0WNZJYuZUmrHsopo54xJE4OaeIUl5ShrZKKXM03YfebzXqGSNkja9hu1wuCuGsfF2zrqRSKLpFYaCV0XRdAAppIQhoQkiu5NJAUE0wVE
//         FSQQd89GrnbDxVDvnI/FXP2B70VTXa0kniPzCz2LRrfostuf8lnRqxmrLpDdMqJeGMLnaAC5VRjYxOX1AiB7MYuR3lZhFt1bI8ySOkdu4klQK9WZycefV7U
//         bXWn0boqTEOkuH0VeXimnnayTIbGxNt1mqynmlpqmOohcWSxOD2O5EG4WkfW4ejeJU/SCurMfrKuTo1h3WSNhnnc4SNaew0i+vNcFR0V6/onX4s9zosRMBr
//         44WPIFPE512sA4dkFeCrcfxjEnVJq8RqJBVODpml5DXkbXA00VLcUxKMSBldUtEsfVSWld2mfZPMdy18h9UfgWHYZ0UocQmnno2w0Dak1UNS/MKk6tOTUa6
//         62XmMfw0VvQuixGbGp6wxRGY/s7XhkkhBcxzwbt1+0F5o9JcadRy0b8RnkgmgED2SHMMgNwNdrdy65OmVa/o9PgppKJsU7WMfNHDkkIaQRexsduXFPkPOEa
//         IspEaFK2qyFZb+CT9ZRGIntRO+B/srAtxWjgs5jrOrJsJBbz3CxudjWLyt9JB3QV5XoJJCEDQkhA0ISug7kJXQFBMKSgCpBBF/wA4zxVz9gO9USe83xVz9k
//         WKqv6LL/fJZ8Z+C0Kv6PL4LOYVYlWnZcOKvyUmUHWQ28t12rKxh15Y2bWaT6//AIt4ndMavIy9Ewwu0UjZoudFZC0ydzV6bZHKZuvpAQucbNBPguyLDZZBc
//         hrR5lddNHGwC/otGOWNo9wrjfJfw9OfBPyy24MbavPopDCG/bcthsmYcEEA67LH7mnb9nH+MV+EOI7Ml+4tXHPQSw+9Gbc2r0TnEHkq5CHtOZw81Z5axrwZ
//         v08q6IgX3VZBBK26qnaSXAC/MLPkh301XfO5Xk347lx20UonmORr27tIPoh7LFIfFarD1jXiRjXjZwBCFyYU8vw9oJuWEt/X9V1leOzleme4SEJKKaEk0Ah
//         CEHXdMKITUEwVIFQG6mEEJPeb4q6Q3BVEmmU96vf7pRVdV9Hl/D+izo1oVP0aX8P6LPZqrEqxYeJzNNU48GC1+ZW4F5esf11a9o2LyB6rr4/tz39JQRuqDn
//         Ow2C0ooMjRuOVlrU+DinpGNIubXKrdGGSWY0uI302U1rr0Zx8Yrgpza505Lshw+SUgN1UGCqYAfZ324Gy76KavLxZpAHAhYrrKUeFTN1N/NdTcPeW6Nut+k
//         IkjHWsAduuvqWW0FlHWR5GTCnfWFlzS4T2bg6r1tdEBDZg4LzFdR1szuzfKOIKRnXpj1WHuaDbdZE7XMvcL0Jw3GGnsRPez/csyupKluk0LmEaG4W5Xn37j
//         Ie3MNlRax8F2inc4kWVVRTujPabY8DzXea68usc9tHBHXglZycD/AH6LQO6ycFcG1EkZOpbf+/Va647/AOm8fRIQULm2SaSaAQhCDqTRZCgYUxsoBWAIK5d
//         m/iV7/c8lTP7o8VdNoPJFVzi9PL+D9FnRrRl1hkHNn6LOYrGamTZjjyF15SnBlrWa6ufdeuY25sTa6yYsO6jpFT2beGR9xyHcuuKzqdseruZKbs2uWtt5rR
//         o8Jp4GNaWZnWuXHclUYXB1sTQVryslZCREAX27IPNcq90iNTiuHYa3LUTBpt7jRd3oFnsxyKvqTFFQzMcGZ80rMuZvO3JH/T7n4bUQyyh1TO5ruv8ArNIN/
//         RTw/D34bVCokqOulyOYBl0AO/Fbmc891jWvJ31PTto5XPIu0gHULUaWdWSTqs5hbFGGgHcm3K6bpeze/wDRc+cdpadZP2bNFydrLIlqquKlmq4og6OG178y
//         bAXXW6TW+471MCOWgkoteolFnMJ89Fqc/LG/l+GOzpRKaj2eehBOtzC7Na2+3JdpNNiUF2EOBF9d1OjwOmo5jPFJI6QtLQXuva/JKCgFHKSzRpOya+P9UxN
//         /2efqcLbBVOLW6d6zcXivC2zRdpJXs6uBsjbjjxXnq+lc6VrQLm5sB4FM32m8enlMMncMSYXHVzsp816IhZVBg1VT17Z52gMYSSN7ngtrcW3W9328kzc/cU
//         JKbm2KgubRgXUxH3pNFtVK6Ii5ltVFWnVQc3iEHXYcUwAAkEwoqQCYCQKaCFR835q6b3B+FUz6xq6b5tvez9EFbxeKT8Kz4hexWg73Hj/as9qsSuhwzPDbi
//         50utWI0Ym9j6h4LTlzkaFYwuDcL1NLFFM8TgCz29YPMfzuq9P6fnvow60TbDYaLQEtwCs6hGZrvxWWg1pDdr6aqPRJ0GRoCiNdQFeynPEXVhyRMubXRbHDK
//         SNMupUXRva0k30CtZE57zNI49y7mRQmMh2t9kTjGis9+U2K6hA8AHKe4hVy0kbp3NjfqF0Us7o7xPObLxROIdth5gIzZ26gLtyskboLFc0sAa6408Eb+Ljk
//         YRccFmvcwVbXO1Db+ei1ZTYEFY78pqbu2Yb2PojGope+czuzQtLS4AtA2uuB1g9zRsCbLZrKiOnzvbq65yd7rb+AWH53Rx/UWeoHNvYcTsr6LDJ60nq8thu
//         SdFTq6w47BepoYmwQsjGzd+9azO149XjzdZRy0U3VzNsSLg8CudeuxenZVYZILduMF7T4LyKu88M3p3TvokEisNOgFSBVYKkFFWAqQUAndApvmyVbLrGz8I
//         /JUyn/L17vzVr/mWH/aPyQR3ae9o/NcDDzC7hsfD9VxEC/ZN/NWFTGq3cImL6OSBvadGCG+B/rdYLTZvitTBX9XVEONszb+hRvxXmmrQus6RhFi12vctSMt
//         t4rHa8/4g+wsHgEhaUbidUe3FdvWZRpwXLKesDiTptZTeD1ZN9LarL9uD3ZGEkc0a1Yc1NLUvaJJLsbs0PLb+ityzNAa2V2Qc1UMzJA98gB5Eq0S0xfd1To
//         BbLlujPLVE1MGuErZC1199yr6d7L2Ly5zuKrkMLxlaJXAakhq5ZYM3ap33cBqL2KcPcbsF23BPmpyWssfBa2WWokpZWHM0XutaYEDRRuXscVSNzwWN1Qmll
//         LnZQ0X891rVhys12WQySPqZD1gBLtuarGr7cdWRJPYm2UWaN1z9XpdxAVpDZJ7FJ4Yx1tXD0UfP3e6tUMcGyMcdg4FeijqdAb6brAkLDJdgLWcAdUGRzAAy
//         TTlfZbl4xZ1vVdaGUkpzbtIA5rztlaXh0d3OLnX0b3JvhcI2vIyhxsBxS3qycUpWTOhTtpdZVMFSB1UEx4qKsBUgqwpAoCT3Fa/6PH+EKmQ9kq1xvTx/hQR
//         B0/d/VcDNvJd7dLHuWezRWJXQSGgAIic+OQSRnK4bKGYkW09EB1u9UbFDUvqKgPldd3G3K69CxugI14LyNFUFlTGLW3C9dSvEsYseClevxa7HSY+vp3NDrZ
//         hZYLMOnpHgNktc9pwGw5gLfp3FpLCpSsa4g22SV1LD6fo7D1Lqh5le+ImTrHXs7T0K124h0cihp8sbHOjsewzUEBYRpIXuBLBcq1tPCD82PRa+R+1m/drQr
//         uktBmlNNRue5wbq5oFyFgVDBilQZpGdQwS9YBHo46bX5LRfSxWuGAKoxAFS6anjxn6XU8ETMz2MDXHc21soym5J5JiYNB14KmWVuUgLCszE35WEcF53OC43
//         dlstfE5c12g7rGMWtybqvJ57+AXdr3ruve44rpZhlVIMzWNvzLt1VTwnPnuA1pvclasdaxovcDwW8yfl5bax5qOeGQsfEQRy2XORqQRYrclqWzk3N/NZtaI
//         yQRJYj6qtkJV2H4RPWM6zM2Jh90u1uumrwGriY1zZo5Re29sqKPFGNp2MLg1zBbVUV+OzEmKnNhxedT5K/xkS/KrHYDVGEva+J7gL5Re5WT8LcFazFq+Mgi
//         qebcDqFDrGzXLmgPJLi4He/cs2z8LO/kDZSCiAmstphSVYKkCoG/3fJWkWpou9v6lVO1BHcrn/RofwfqUFY2HguBupXc06DwWfGSQPEj4qxK6mMYYjf3+Gq
//         gL3sE23sE7tJVQgerLXA63vZeowqq2bfbdeVb2p2jm4D4rX7dPIJWcNwpXfxXj1dwCCNlMut5rKpK8TRjXguqOpa7QnUcFHomnZnDbHZMTX+rpzVIYJDcFd
//         YytbYDRWOksc7qvgRZQD8xVk0TDqbDwXBPI2IaHT81OLbJF7n9okei5aypbHHwBsqJa1sUeYm9+CyJp5KqQm9gEjndozzGSUEAOF7WQWh02Qggbgnil1L43
//         taDrlLjdLMW2cDqNQtceHWu3q6CMS9iR1iNmqRp2xtY9oym9vFToxEY80rmh1tCTbmipljdShjXNJzcFvM9OXfamSAl5Ic0X4Erkq4MjA8uaTexsVJnuhKU
//         DqyornZkaHOPvAdkd65ibkldUojbRAi/WOktfut/NcqxWoE2mxSQiukJpcEIo4qQSGykAgZ2Ph/JXu+jRdzbfEqq3ZNuSt1NOweP5qCpuwWfDqD3PeP8AkV
//         ZUYvQ0vvTZ3C/ZYL/0WK3HDG5wbAC0vc4XdrqSV0zi1i6jdbsnqB3rAnxyokZliY2G/EG5Xp8Fw6GXDoqlj3SGVty5zr68QlxZPa4/leRXSxO9pjcdg5bxh
//         0FxcEahcbIMtQwcjwW22POzTcLD15xJGIWSUst23ynZTFS8kOa6zuC05KdsjbOC4JKJ8btrjgqWcXxYq9ls7HNI3IXezHISPeFzwtssYwSlIQPO7fNCarRn
//         xcvPZaXW20sFnSVMj5M8jtuAVop5DuCAj2a2hULbXKRJOcz/AHRrZXwMYyphzjsiRpd4X1+AV7YQ0arkqZA17L8CiX1Oh2tUTrqxxXKT2VbK89a3q3NN2kE
//         8lW8WBBW3kXQljYczyBsAfMpPymG4sdd0MjMlNa17W/VQMeRh0tfvWmVLCAxRkN9E7gMuTouaSUuJA0Cw0JyOqYziCT+SoUkrKKVkJp2TgvumFCWWGnaXTS
//         NYO8rMn6RQsuKeEyH7T9ArM2/RdSNgNNlGaop6VpM8zI+4nX0Xl58brpwR1vVtPCMW+O64C4uNyST3rc8X+sXyf49JUdJaeMltPE6X/c45QsutxutrWdU54
//         ji+wwWv4rOQukxIxdWmbIQhbYMFel6KY42hkdRVL8sMxuxxOjHd/cV5oKQUslnG8aub2Pqwh/zg4LSpxYrwXRvpUKdrKLEnExDRk25aOR7l9Aga18bZI3Bz
//         XAEFpuCF5tZsfR8fkmp6Wugz6t34qp9Pduy64jwKtLA4d6jdjI6gC+gV0dPE4bLqfFfgqHF0Z7IRjiEkTWA2tfkuMx3Oy6nF0jrkIDL6oOKYWHisr23DIMX
//         ZBi0zoKeeJ7WzDZj/AKuYWOi16nQEBeM6UxA0ZkO7ZBY+oWsztZ8vrD0uD4VFiERqWTZomneN4N/NXdIsOiw+vY2neZIZoWyMLjdw4EHvuD6r5zguO12BVP
//         W0knYd85E73XjvH6r2LccZjwFQ1wDmtsYr6s/vmt3PHil6silMcdmvY3TW4JUXyZhrI09waqyzXdVSjI3fdZ60oldc5RsFUQpkIssqhZFlKydkOoWTspWRZ
//         DrxpcXG5JJ5lRQmvVxwJCaFQk07IsnEJCdkWQJMFLVNBIbLcwLpTXYI4RsPXUxPahedB4HgsIJgqWdazq5vY+w4N0kwzGWhtPMGTcYZNHeXPyW40ad6+Cte
//         QQQSCNjdelwjp1i+GhsckgrIR9SbcDudv+a43x8+nrx+o/8AT6o9o4qosvxXnaD5QMGrAG1PWUbz94Mzf4gtyGuo6luamrIJW/7JAViyx3m86+kjG0GyhI0
//         NbwVzjGNXSNHeXBZeIY1hdID11fA23DOCfQaqcrXZEJW3zOOy8H0tq2h7KJhBPzknceAWpjHTinED4MMY6R7tOteLAeA3K8RJI+WR0kji57jcuJ1K64z768
//         nm8ss5EFOKWSCQSRPcx42c02KikuryvTYLjstVUCkrHBzn6MfaxvyK1Jjmk8NF4Vri1wc0kEagjgvVYZi0VdG1kz2xzjQ3Ng/vC5bz/jedO2yRarC0BJcm1
//         eVOymW8io2QLKiyaLIPE2SspDVFtV7HArITQnAWQmgBXgAU90WQAnAsqMqkmnBGyVlOyVlArIy2OidlIKCNzdFzvZS8glYckXozX4lLwTsiycOoqNlOyVkR
//         ApKZCMqCtNSLSlYoNChxqppSGPcZYh9V248Ctymxeiq3ZGyGN52bJpfz2XktUarFxK1NV7uyRHJeao8eqaaIRPY2Zo2zEgjzW9Q10VfB1kd2kaOYTq1crmx
//         uXq5IqRSWGnhwpKKY3XtjgZRZI7qQCqEmhCACaEWQCaSaKEIQoBCEIBCE1OBIQhUCEIQCSaSgCkhCgRGiVtFJIhBArqw+tfQ1bZRct2e3mFzFClHuQ5r2te
//         w3a4XB5hFll4BWCekNO49uHbvatReezldZevDhAQ3UbpDdetyHFWDZQG6kqgsmhCAQhNAk0IQG6EIRTSTQgSEIQNCEKBITshAkLqw3DK3F66OioKd0879mj
//         gOZPAd69oz5IcYdBmfiNEyW1+r7ZHheyg8AhaWOdH8S6PVYp8RgyF2rJGm7HjmCsyycCugp5SllQJIqVrIIUHRhtV7HXRzX7N7O8DuvYkctQvCFetwWpNVh
//         sdz24+w7y2+C5bn5bzXmqykmw6umoqhuWWF5Y8d4XOV9B+VXAvZq2DGYmdmcdXNb7QGh8xp5L57e66xipBSUQpBbQ0IQgE0k0AhCEAmkndAIQhAIQhAIQhA
//         IQmFKr618kuHxRYDWYhlBmnqOqzW1DWgG3q74L3jQvA/JJiMUuE1uGEgSwy9e0cXNcAD6ED1X0EDS63n6KyOkOB0+P4PPQTsBc5pMTyNWPtoR/ey/PpYWEs
//         cLOabEd6/Sr39WDJlLsovlAuTbgF8OqegvShxlqzhEmV7i8sa9rnC5+yDdZ0kefp6aarqYqWmiMs0zgyNjRq4nYL283ySYrFh3XCvpn1VrmnANvDNz8rd6p
//         +TOj6vpqW1ULmT09PI5jJGkFr9Bse4lfXmObMCApJ1X5tqaeakqH09RE6KWN2V7HCxBVRC+h/KvhLIK2lxRjbOlBilIG5GrT6XHkF8+I1ClnBUd1tdGZ7VE
//         tP8AbbmA7x/Q/BYxGpVlLUyUdQ2eI2c29vMWWbOrH6A6T4TFj2AVlELFz2F0d+DxqPivz05pY9zXCzmmxC/R8Eh65zNwSvhXTChZh/SzEaeO2TrS5oHAO1/
//         VTNXTGCkEgE11YNMJJoCyaSaAQhCARZCaBIT4oQJNCEAhCEAhCLINHBMZrMCxOKvonhssZ2OoeDu0jkV9Ywr5TMGxFsUUsFVT1chDBC1mcOcdAGkd/Oy+Lr
//         1XycUrKrpvRdYAREHygHmGkj42KzLyq+2OC5yCBcFXuOqg8Lqy5vYaaasirnwMNVACGygWdYgggniNdlIgsd1keoB1Cvj2Kqh0qZI+DtUHkflTpxU9EhUNt
//         eGZjifHT9V8cvcr678qeICi6OMoAwudWSDXg0NNz53svkA0cuevtqFxKTiNlLmqzusj/9k=
//         `,
//     firstName: "Austin",
//     primaryDescription: " is a student at BYU-Idaho studying Computer Science",
//     workDescription1: "He is working as a full time termite technician for Orkin PC.",
//     workDescription2: "He also works for fun on video game development.",
//     linkTitleText: "Check out the LinkedIn and Github!",
//     linkedInLink: {
//         link: "https://www.linkedin.com/in/austin-campbell-4aa2a4246?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgLO2u4iuQyK%2B2yi0v45e2A%3D%3D",
//         text: "LinkedIn",
//     },
//     githubLink: {
//         link: "https://github.com/AustinCBYUi",
//         text: "GitHub",
//     },
//     contactText: "Email me at infrared.dayz@gmail.com",
// };

// exports.getData = (req, res, next) => {
//     res.status(200).json(data);
// };