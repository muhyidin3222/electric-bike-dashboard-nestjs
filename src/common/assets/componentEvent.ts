export default ({
  headerRight1,
  headerRight2,
  username,
  title,
  id,
  start_date,
  url_online,
  location,
}) => {
  return ` 
        <body style=" display: flex; flex-direction: column; align-items: center;">
            <div style="max-width: 600px;">

                <table style="width:100%; padding-bottom:30px; padding-top:30px; background-color: #27A8E0;">
                    <tr>
                        <td>
                            <a href="https://bisaekspor.com" target="_blank" style="padding-left:50px;">
                                <img src="https://bisaekspor.s3.us-east-1.amazonaws.com/production/public/upload/admin/logo_bisaekspor.png"
                                    style="height:auto; max-width: 138px; width:auto" />
                            </a>
                        </td>
                        <td align="right" style="padding-right:50px;">
                            <div style="color:#FFFFFF; font-weight: bold; font-size: 15px; line-height: 22px;">${headerRight1}</div>
                            <div style="color:#FFFFFF; font-weight: normal; font-size: 15px; line-height: 22px;">${headerRight2}</div>
                        </td>
                    <tr>
                </table>

                <div style="width:100%; background-color: #FFFFFF; line-height: 20px; padding-left: 20px; padding-right: 20px;">
                    <div style="color:#000000; font-weight: normal; font-size: 18px; line-height: 21px; margin-top: 34px; line-height: 20px;">Hi, ${
                      username || ''
                    }</div>
                    <div style="color:#000000; margin-top: 20px; font-weight: normal; font-size: 12px; line-height: 20px;">Selamat, pembelian tiket untuk event <b>"${
                      title || ''
                    }"</b> berhasil.</div>
                    <div style="color:#000000; font-weight: normal; font-size: 12px; line-height: 20px;">Berikut informasi yang perlu kamu ketahui :</div>
                    <div style="color:#000000; font-weight: bold; font-size: 18px; line-height: 21px; margin-top: 20px;">No Order : ${
                      id || ''
                    }</div>
                    <div style="color:#000000; font-weight: normal; font-size: 12px; line-height: 20px;">Nama Event : ${
                      title || ''
                    }</div>
                    <div style="color:#000000; font-weight: normal; font-size: 12px; line-height: 20px;">Hari tanggal : ${
                      start_date || ''
                    }</div>
                    <div style="color:#000000; font-weight: normal; font-size: 12px; line-height: 20px;">Link Zoom / Map : ${
                      location || ''
                    } / ${url_online || ''}</div>
                    <div style="color:#000000; font-weight: normal; font-size: 12px; line-height: 20px; margin-top: 20px;">Terima kasih, Salam Ekspor! </div>
                    <div style="color:#000000; font-weight: normal; font-size: 12px; line-height: 20px; margin-top: 20px;">*untuk online event menggunakan zoom meeting harap gunakan display name</div>
                    <div style="color:#000000; font-weight: normal; font-size: 12px; line-height: 20px; margin-bottom: 20px;"> dengan format (nama) - (no order) untuk memudahkan proses verifikasi</div>
                </div>

             
                <div style="width:100%; background-color: #27A8E0; margin: 0px; padding-top: 30px; padding-bottom: 30px;">

                    <table width="100%" align="center" scope="row">
                        <tr align="center">
                            <td scope="row" align="center" valign="bottom">
                                <img src=" https://bisaekspor.s3.us-east-1.amazonaws.com/production/public/upload/admin/web_link.png"
                                    style="width: 16px; height:16px;" />
                                <a href="https://bisaekspor.com" target="_blank"
                                    style="color:#FFFFFF; margin-left: 10px;">bisaekspor.com</a>
                            </td>
                            <td scope="row" align="center" valign="bottom" style="margin-left:10px">
                                <img src="https://bisaekspor.s3.us-east-1.amazonaws.com/production/public/upload/admin/instagram.png"
                                    style="width: 16px; height:16px;" />
                                <a style="color:#FFFFFF; margin-left: 10px;" target="_blank"
                                    href="https://www.instagram.com/komunitasbisaekspor">@komunitasbisaekspor</a>
                            </td>
                            <td scope="row" align="center" valign="bottom" style="margin-left:10px">
                                <img src="https://bisaekspor.s3.us-east-1.amazonaws.com/production/public/upload/admin/whatt_app.png"
                                    style="width: 16px; height:16px;" />
                                <a style="color:#FFFFFF; margin-left: 10px;" target="_blank" href="https://wa.me/6281901777977">+62
                                    819-0177-7977</a>
                            </td>
                        </tr>
                    </table>

                    <table width="100%" align="center" scope="row">
                        <tr align="center">
                            <td align="right">
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.bisaekspor.edu">
                                    <img src="https://bisaekspor.s3.us-east-1.amazonaws.com/production/public/upload/admin/googleplay.png"
                                        style="max-width: 80px; width:auto; height:auto; margin-right: 20px;" />
                                </a>
                            </td>
                            <td align="left">
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.bisaekspor.edu">
                                    <img src="https://bisaekspor.s3.us-east-1.amazonaws.com/production/public/upload/admin/appstore.png"
                                        style="max-width: 80px; width:auto; height:auto; margin-left: 20px;" />
                                </a>
                            </td>
                        </tr>
                    </table>

                    <table width="100%" align="center">
                        <tr align="center">
                            <td align="center">
                                <a href="https://bisaekspor.com" target="_blank">
                                    <img src="https://bisaekspor.s3.us-east-1.amazonaws.com/production/public/upload/admin/logo_bisaekspor.png"
                                        style="height:auto; max-width: 138px; width:auto" />
                                </a>
                            </td>
                        </tr>
                    </table>

                </div>
            </div>
        </body>
        `;
};

export const newTemplateEvent = ({
  //   headerRight1,
  //   headerRight2,
  email,
  username,
  title,
  id,
  start_date,
  url_online,
  //   location,
}) => {
  return ` 
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="format-detection" content="telephone=no">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Event Ticket</title>
        <style type="text/css" emogrify="no">
            #outlook a {
                padding: 0;
            }
    
            .ExternalClass {
                width: 100%;
            }
    
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
            }
    
            table td {
                border-collapse: collapse;
                mso-line-height-rule: exactly;
            }
    
            .editable.image {
                font-size: 0 !important;
                line-height: 0 !important;
            }
    
            .nl2go_preheader {
                display: none !important;
                mso-hide: all !important;
                mso-line-height-rule: exactly;
                visibility: hidden !important;
                line-height: 0px !important;
                font-size: 0px !important;
            }
    
            body {
                width: 100% !important;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                margin: 0;
                padding: 0;
            }
    
            img {
                outline: none;
                text-decoration: none;
                -ms-interpolation-mode: bicubic;
            }
    
            a img {
                border: none;
            }
    
            table {
                border-collapse: collapse;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }
    
            th {
                font-weight: normal;
                text-align: left;
            }
    
            *[class="gmail-fix"] {
                display: none !important;
            }
        </style>
        <style type="text/css" emogrify="no">
            @media (max-width: 600px) {
                .gmx-killpill {
                    content: ' \\03D1';
                }
            }
        </style>
        <style type="text/css" emogrify="no">
            @media (max-width: 600px) {
                .gmx-killpill {
                    content: ' \\03D1';
                }
    
                .r0-c {
                    box-sizing: border-box !important;
                    text-align: center !important;
                    valign: top !important;
                    width: 320px !important
                }
    
                .r1-o {
                    border-style: solid !important;
                    margin: 0 auto 0 auto !important;
                    width: 320px !important
                }
    
                .r2-c {
                    box-sizing: border-box !important;
                    text-align: center !important;
                    valign: top !important;
                    width: 100% !important
                }
    
                .r3-o {
                    background-size: cover !important;
                    border-style: solid !important;
                    margin: 0 auto 0 auto !important;
                    width: 100% !important
                }
    
                .r4-i {
                    background-color: #ffffff !important;
                    color: #3b3f44 !important;
                    padding-bottom: 20px !important;
                    padding-left: 15px !important;
                    padding-right: 15px !important;
                    padding-top: 20px !important
                }
    
                .r5-c {
                    box-sizing: border-box !important;
                    display: block !important;
                    valign: top !important;
                    width: 100% !important
                }
    
                .r6-o {
                    border-style: solid !important;
                    width: 100% !important
                }
    
                .r7-i {
                    color: #3b3f44 !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important
                }
    
                .r8-o {
                    border-style: solid !important;
                    margin: 0 auto 0 auto !important;
                    width: 100% !important
                }
    
                .r9-i {
                    color: #3b3f44 !important;
                    padding-bottom: 0px !important;
                    padding-top: 15px !important
                }
    
                .r10-c {
                    box-sizing: border-box !important;
                    text-align: left !important;
                    valign: top !important;
                    width: 100% !important
                }
    
                .r11-o {
                    border-style: solid !important;
                    margin: 0 auto 0 0 !important;
                    width: 100% !important
                }
    
                .r12-i {
                    color: #3b3f44 !important;
                    padding-bottom: 0px !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                    padding-top: 0px !important;
                    text-align: left !important
                }
    
                .r13-i {
                    background-color: #ffffff !important;
                    padding-bottom: 20px !important;
                    padding-left: 15px !important;
                    padding-right: 15px !important;
                    padding-top: 20px !important
                }
    
                .r14-i {
                    padding-left: 0px !important;
                    padding-right: 0px !important
                }
    
                .r15-i {
                    padding-bottom: 0px !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                    padding-top: 0px !important;
                    text-align: left !important
                }
    
                .r16-i {
                    padding-bottom: 0px !important;
                    padding-top: 15px !important;
                    text-align: left !important
                }
    
                .r17-i {
                    padding-bottom: 15px !important;
                    padding-top: 15px !important;
                    text-align: left !important
                }
    
                .r18-i {
                    padding-bottom: 15px !important;
                    padding-top: 15px !important
                }
    
                .r19-i {
                    background-color: #f9fafb !important;
                    padding-bottom: 20px !important;
                    padding-left: 15px !important;
                    padding-right: 15px !important;
                    padding-top: 20px !important
                }
    
                .r20-i {
                    background-color: #f9fafb !important;
                    padding-bottom: 5px !important;
                    padding-left: 15px !important;
                    padding-right: 15px !important;
                    padding-top: 5px !important
                }
    
                .r21-i {
                    color: #3b3f44 !important;
                    padding-bottom: 15px !important;
                    padding-top: 15px !important;
                    text-align: center !important
                }
    
                .r22-o {
                    background-size: cover !important;
                    border-style: solid !important;
                    margin: 0 auto 0 auto !important;
                    margin-bottom: 0px !important;
                    margin-top: 0px !important;
                    width: 100% !important
                }
    
                .r23-i {
                    background-color: #f9fafb !important;
                    padding-bottom: 0px !important;
                    padding-left: 15px !important;
                    padding-right: 15px !important;
                    padding-top: 0px !important
                }
    
                .r24-i {
                    padding-bottom: 0px !important;
                    padding-right: 0px !important;
                    padding-top: 0px !important
                }
    
                .r25-c {
                    box-sizing: border-box !important;
                    text-align: right !important;
                    valign: top !important;
                    width: 100% !important
                }
    
                .r26-o {
                    border-style: solid !important;
                    margin: 0 0 0 auto !important;
                    width: 100% !important
                }
    
                .r27-i {
                    padding-bottom: 0px !important;
                    padding-left: 4px !important;
                    padding-top: 0px !important
                }
    
                .r28-c {
                    box-sizing: border-box !important;
                    text-align: center !important;
                    valign: bottom !important;
                    width: 100% !important
                }
    
                .r29-c {
                    box-sizing: border-box !important;
                    display: block !important;
                    valign: bottom !important;
                    width: 100% !important
                }
    
                .r30-o {
                    background-size: auto !important;
                    border-style: solid !important;
                    margin: 0 0 0 auto !important;
                    margin-bottom: 0px !important;
                    margin-top: 0px !important;
                    width: 100% !important
                }
    
                .r31-i {
                    padding-bottom: 0px !important;
                    padding-left: 0px !important;
                    padding-right: 10px !important;
                    padding-top: 0px !important
                }
    
                .r32-o {
                    background-size: auto !important;
                    border-style: solid !important;
                    margin: 0 auto 0 0 !important;
                    margin-bottom: 0px !important;
                    margin-top: 0px !important;
                    width: 100% !important
                }
    
                .r33-i {
                    padding-bottom: 0px !important;
                    padding-left: 10px !important;
                    padding-right: 0px !important;
                    padding-top: 0px !important
                }
    
                .r34-i {
                    background-color: #f9fafb !important;
                    color: #3b3f44 !important;
                    padding-bottom: 0px !important;
                    padding-left: 15px !important;
                    padding-right: 15px !important;
                    padding-top: 0px !important
                }
    
                .r35-c {
                    box-sizing: border-box !important;
                    text-align: center !important;
                    width: 100% !important
                }
    
                .r36-i {
                    color: #3b3f44 !important;
                    padding-bottom: 30px !important;
                    padding-top: 30px !important
                }
    
                .r37-i {
                    background-color: #00a0e4 !important;
                    color: #3b3f44 !important;
                    padding-bottom: 0px !important;
                    padding-left: 15px !important;
                    padding-right: 15px !important;
                    padding-top: 0px !important
                }
    
                .r38-i {
                    color: #3b3f44 !important;
                    padding-bottom: 0px !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                    padding-top: 0px !important;
                    text-align: center !important
                }
    
                body {
                    -webkit-text-size-adjust: none
                }
    
                .nl2go-responsive-hide {
                    display: none
                }
    
                .nl2go-body-table {
                    min-width: unset !important
                }
    
                .mobshow {
                    height: auto !important;
                    overflow: visible !important;
                    max-height: unset !important;
                    visibility: visible !important;
                    border: none !important
                }
    
                .resp-table {
                    display: inline-table !important
                }
    
                .magic-resp {
                    display: table-cell !important
                }
            }
        </style>
        <!--[if !mso]><!-->
        <style type="text/css" emogrify="no">
            @import url("https://fonts.googleapis.com/css2?family=Montserrat");
        </style>
        <!--<![endif]-->
        <style type="text/css">
            p,
            h1,
            h2,
            h3,
            h4,
            ol,
            ul {
                margin: 0;
            }
    
            a,
            a:link {
                color: #0092ff;
                text-decoration: underline
            }
    
            .nl2go-default-textstyle {
                color: #3b3f44;
                font-family: arial, helvetica, sans-serif;
                font-size: 16px;
                line-height: 1.5
            }
    
            .default-button {
                border-radius: 4px;
                color: #ffffff;
                font-family: arial, helvetica, sans-serif;
                font-size: 16px;
                font-style: normal;
                font-weight: normal;
                line-height: 1.15;
                text-decoration: none;
                width: 50%
            }
    
            .default-heading1 {
                color: #1F2D3D;
                font-family: arial, helvetica, sans-serif;
                font-size: 36px
            }
    
            .default-heading2 {
                color: #1F2D3D;
                font-family: arial, helvetica, sans-serif;
                font-size: 32px
            }
    
            .default-heading3 {
                color: #1F2D3D;
                font-family: arial, helvetica, sans-serif;
                font-size: 24px
            }
    
            .default-heading4 {
                color: #1F2D3D;
                font-family: arial, helvetica, sans-serif;
                font-size: 18px
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
    
            .no-show-for-you {
                border: none;
                display: none;
                float: none;
                font-size: 0;
                height: 0;
                line-height: 0;
                max-height: 0;
                mso-hide: all;
                overflow: hidden;
                table-layout: fixed;
                visibility: hidden;
                width: 0;
            }
        </style>
        <!--[if mso]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]-->
    </head>
    
    <body text="#3b3f44" link="#0092ff" yahoo="fix" style="">
        <table cellspacing="0" cellpadding="0" border="0" role="presentation" class="nl2go-body-table" width="100%"
            style="width: 100%;">
            <tr>
                <td align="center" class="r0-c">
                    <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600" class="r1-o"
                        style="table-layout: fixed; width: 600px;">
                        <tr>
                            <td valign="top" class="">
                                <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                    <tr>
                                        <td class="r2-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r3-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="20"
                                                        style="font-size: 20px; line-height: 20px; background-color: #ffffff;">
                                                        ­</td>
                                                </tr>
                                                <tr>
                                                    <td class="r4-i"
                                                        style="background-color: #ffffff; color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="33.33%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r7-i"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px;">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r2-c" align="center">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="169" class="r8-o"
                                                                                                style="table-layout: fixed; width: 169px;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td class="r9-i"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 0px; line-height: 0px;">
                                                                                                        <img src="https://img.mailinblue.com/4654435/images/content_library/original/62836d58f1ec115197396463.png"
                                                                                                            width="169"
                                                                                                            border="0"
                                                                                                            class=""
                                                                                                            style="display: block; width: 100%;">
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th width="33.33%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r7-i"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px;">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r12-i nl2go-default-textstyle"
                                                                                                        style="line-height: 1.5; color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th width="33.33%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r7-i"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px;">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r12-i nl2go-default-textstyle"
                                                                                                        style="line-height: 1.5; color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                <span
                                                                                                                    style="color: #B6BCC9; font-size: 12px;">Platform
                                                                                                                    Pembelajaran
                                                                                                                    Ekspor
                                                                                                                    No.1 Di
                                                                                                                    Indonesia</span>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="20"
                                                        style="font-size: 20px; line-height: 20px; background-color: #ffffff;">
                                                        ­</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="r2-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r8-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="20"
                                                        style="font-size: 20px; line-height: 20px; background-color: #ffffff;">
                                                        ­</td>
                                                </tr>
                                                <tr>
                                                    <td class="r13-i" style="background-color: #ffffff;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="50%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r15-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div></div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r16-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0; font-size: 22px;">
                                                                                                                <strong>Hai</strong>
                                                                                                            </p>
                                                                                                            <p
                                                                                                                style="margin: 0; font-size: 22px;">
                                                                                                                <strong>${
                                                                                                                  username ||
                                                                                                                  email
                                                                                                                },</strong>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                Terima kasih
                                                                                                                telah
                                                                                                                berpartisipasi
                                                                                                                pada Event
                                                                                                                Bisa Ekspor.
                                                                                                                Berikut data
                                                                                                                tiket event
                                                                                                                kamu :</p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th width="50%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r2-c" align="center">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="270" class="r8-o"
                                                                                                style="table-layout: fixed; width: 270px;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td class="r18-i"
                                                                                                        style="font-size: 0px; line-height: 0px;">
                                                                                                        <img src="https://img.mailinblue.com/4654435/images/content_library/original/6283721b3b8a520d2e50f1a3.png"
                                                                                                            width="270"
                                                                                                            border="0"
                                                                                                            class=""
                                                                                                            style="display: block; width: 100%;">
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="20"
                                                        style="font-size: 20px; line-height: 20px; background-color: #ffffff;">
                                                        ­</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="r2-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r8-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="20"
                                                        style="font-size: 20px; line-height: 20px; background-color: #f9fafb;">
                                                        ­</td>
                                                </tr>
                                                <tr>
                                                    <td class="r19-i" style="background-color: #f9fafb;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="50%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                Order No.
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                Judul Event
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                Hari Tanggal
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                Link</p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th width="50%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                <strong>: ${id}</strong>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                <strong>: ${
                                                                                                                  title ||
                                                                                                                  ''
                                                                                                                }</strong>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                <strong>: ${
                                                                                                                  start_date ||
                                                                                                                  ''
                                                                                                                }</strong>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                <strong>: ${
                                                                                                                  url_online ||
                                                                                                                  ''
                                                                                                                }</strong>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="20"
                                                        style="font-size: 20px; line-height: 20px; background-color: #f9fafb;">
                                                        ­</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="r2-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r8-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="20"
                                                        style="font-size: 20px; line-height: 20px; background-color: #ffffff;">
                                                        ­</td>
                                                </tr>
                                                <tr>
                                                    <td class="r13-i" style="background-color: #ffffff;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="100%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                Jangan lupa
                                                                                                                hadir dalam
                                                                                                                event yang
                                                                                                                kamu ikuti
                                                                                                                ya!</p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                Salam,</p>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                <strong>Tim
                                                                                                                    Bisa
                                                                                                                    Ekspor</strong>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="20"
                                                        style="font-size: 20px; line-height: 20px; background-color: #ffffff;">
                                                        ­</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="r2-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r8-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="20"
                                                        style="font-size: 20px; line-height: 20px; background-color: #ffffff;">
                                                        ­</td>
                                                </tr>
                                                <tr>
                                                    <td class="r13-i" style="background-color: #ffffff;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="100%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                *Untuk
                                                                                                                Online Event
                                                                                                                harap
                                                                                                                gunakan
                                                                                                                display name
                                                                                                                dengan
                                                                                                                format
                                                                                                                “(nama)-No
                                                                                                                order)”
                                                                                                                untuk
                                                                                                                memudahkan
                                                                                                                proses
                                                                                                                verifikasi
                                                                                                                kehadiran.
                                                                                                                Contoh :
                                                                                                                Rudi H-52201
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div></div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="20"
                                                        style="font-size: 20px; line-height: 20px; background-color: #ffffff;">
                                                        ­</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="r2-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r8-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="5"
                                                        style="font-size: 5px; line-height: 5px; background-color: #f9fafb;">
                                                        ­</td>
                                                </tr>
                                                <tr>
                                                    <td class="r20-i" style="background-color: #f9fafb;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="100%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="center"
                                                                                                        valign="top"
                                                                                                        class="r21-i nl2go-default-textstyle"
                                                                                                        style="line-height: 1.5; color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; text-align: center;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                Download
                                                                                                                Bisa Ekspor
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="5"
                                                        style="font-size: 5px; line-height: 5px; background-color: #f9fafb;">
                                                        ­</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="r2-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r22-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr>
                                                    <td class="r23-i" style="background-color: #f9fafb;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="25%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div></div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th width="25%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="105" class="r11-o"
                                                                                                style="table-layout: fixed; width: 105px;">
                                                                                                <tr>
                                                                                                    <td class="r24-i"
                                                                                                        style="font-size: 0px; line-height: 0px;">
                                                                                                        <img src="https://img.mailinblue.com/4654435/images/content_library/original/627c7f0646b99b42c5206853.png"
                                                                                                            width="105"
                                                                                                            border="0"
                                                                                                            class=""
                                                                                                            style="display: block; width: 100%;">
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th width="25%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r25-c" align="right">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="105" class="r26-o"
                                                                                                style="table-layout: fixed; width: 105px;">
                                                                                                <tr>
                                                                                                    <td class="nl2go-responsive-hide"
                                                                                                        width="4"
                                                                                                        style="font-size: 0px; line-height: 1px;">
                                                                                                        ­ </td>
                                                                                                    <td class="r27-i"
                                                                                                        style="font-size: 0px; line-height: 0px;">
                                                                                                        <img src="https://img.mailinblue.com/4654435/images/content_library/original/627c7e8d4bab1c5a2d0e7ec2.png"
                                                                                                            width="101"
                                                                                                            border="0"
                                                                                                            class=""
                                                                                                            style="display: block; width: 100%;">
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th width="25%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div></div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="r28-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r8-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr>
                                                    <td class="r23-i" style="background-color: #f9fafb;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="100%" valign="bottom" class="r29-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="center"
                                                                                                        valign="top"
                                                                                                        class="r21-i nl2go-default-textstyle"
                                                                                                        style="line-height: 1.5; color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; text-align: center;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                Stay
                                                                                                                Connected
                                                                                                                with us</p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="r2-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r22-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr>
                                                    <td class="r23-i" style="background-color: #f9fafb;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="25%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div></div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th width="25%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r25-c" align="right">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="60" class="r30-o"
                                                                                                style="table-layout: fixed; width: 60px;">
                                                                                                <tr>
                                                                                                    <td class="r31-i"
                                                                                                        style="font-size: 0px; line-height: 0px;">
                                                                                                        <img src="https://img.mailinblue.com/4654435/images/content_library/original/627c7f9325795553d231fbf8.png"
                                                                                                            width="50"
                                                                                                            border="0"
                                                                                                            class=""
                                                                                                            style="display: block; width: 100%;">
                                                                                                    </td>
                                                                                                    <td class="nl2go-responsive-hide"
                                                                                                        width="10"
                                                                                                        style="font-size: 0px; line-height: 1px;">
                                                                                                        ­ </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th width="25%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="60" class="r32-o"
                                                                                                style="table-layout: fixed; width: 60px;">
                                                                                                <tr>
                                                                                                    <td class="nl2go-responsive-hide"
                                                                                                        width="10"
                                                                                                        style="font-size: 0px; line-height: 1px;">
                                                                                                        ­ </td>
                                                                                                    <td class="r33-i"
                                                                                                        style="font-size: 0px; line-height: 0px;">
                                                                                                        <img src="https://img.mailinblue.com/4654435/images/content_library/original/627c7ff1630512572864c865.png"
                                                                                                            width="50"
                                                                                                            border="0"
                                                                                                            class=""
                                                                                                            style="display: block; width: 100%;">
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th width="25%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div></div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="r2-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r8-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr>
                                                    <td class="r34-i"
                                                        style="background-color: #f9fafb; color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="100%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r7-i"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px;">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r35-c" align="center">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="513" class="r8-o"
                                                                                                style="table-layout: fixed;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="30"
                                                                                                        style="font-size: 30px; line-height: 30px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td class="r36-i"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; height: 2px;">
                                                                                                        <table width="100%"
                                                                                                            cellspacing="0"
                                                                                                            cellpadding="0"
                                                                                                            border="0"
                                                                                                            role="presentation">
                                                                                                            <tr>
                                                                                                                <td>
                                                                                                                    <table
                                                                                                                        width="100%"
                                                                                                                        cellspacing="0"
                                                                                                                        cellpadding="0"
                                                                                                                        border="0"
                                                                                                                        role="presentation"
                                                                                                                        valign=""
                                                                                                                        class="r36-i"
                                                                                                                        height="2"
                                                                                                                        style="border-top-style: solid; background-clip: border-box; border-top-color: #e6eaec; border-top-width: 2px; font-size: 2px; line-height: 2px;">
                                                                                                                        <tr>
                                                                                                                            <td height="0"
                                                                                                                                style="font-size: 0px; line-height: 0px;">
                                                                                                                                ­
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="30"
                                                                                                        style="font-size: 30px; line-height: 30px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="r2-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r8-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr>
                                                    <td class="r34-i"
                                                        style="background-color: #f9fafb; color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="100%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r7-i"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px;">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="center"
                                                                                                        valign="top"
                                                                                                        class="r21-i nl2go-default-textstyle"
                                                                                                        style="line-height: 1.5; color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; text-align: center;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                Butuh
                                                                                                                bantuan?
                                                                                                                Silahkan
                                                                                                                hubungi kami
                                                                                                                di</p>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                0819-0177-7977
                                                                                                                   |  
                                                                                                                 support@bisaekspor.com
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="r2-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r8-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr>
                                                    <td class="r37-i"
                                                        style="background-color: #00a0e4; color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="100%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r7-i"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px;">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr>
                                                                                                    <td align="center"
                                                                                                        valign="top"
                                                                                                        class="r38-i nl2go-default-textstyle"
                                                                                                        style="line-height: 1.5; color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; text-align: center;">
                                                                                                        <div>
                                                                                                            <p
                                                                                                                style="margin: 0;">
                                                                                                                <span
                                                                                                                    style="color: #ffffff;">©
                                                                                                                    2022
                                                                                                                    Bisa
                                                                                                                    ekspor.
                                                                                                                    All
                                                                                                                    Rights
                                                                                                                    reserved.</span>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="r2-c" align="center">
                                            <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                width="100%" class="r8-o" style="table-layout: fixed; width: 100%;">
                                                <!-- -->
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="20"
                                                        style="font-size: 20px; line-height: 20px; background-color: #ffffff;">
                                                        ­</td>
                                                </tr>
                                                <tr>
                                                    <td class="r13-i" style="background-color: #ffffff;">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th width="100%" valign="top" class="r5-c">
                                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                                        role="presentation" width="100%" class="r6-o"
                                                                        style="table-layout: fixed; width: 100%;">
                                                                        <!-- -->
                                                                        <tr>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                            <td valign="top" class="r14-i">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" border="0"
                                                                                    role="presentation">
                                                                                    <tr>
                                                                                        <td class="r10-c" align="left">
                                                                                            <table cellspacing="0"
                                                                                                cellpadding="0" border="0"
                                                                                                role="presentation"
                                                                                                width="100%" class="r11-o"
                                                                                                style="table-layout: fixed; width: 100%;">
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        valign="top"
                                                                                                        class="r17-i nl2go-default-textstyle"
                                                                                                        style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                                                                                        <div></div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    class="nl2go-responsive-hide">
                                                                                                    <td height="15"
                                                                                                        style="font-size: 15px; line-height: 15px;">
                                                                                                        ­</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="nl2go-responsive-hide" width="15"
                                                                                style="font-size: 0px; line-height: 1px;">­
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr class="nl2go-responsive-hide">
                                                    <td height="20"
                                                        style="font-size: 20px; line-height: 20px; background-color: #ffffff;">
                                                        ­</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    
    </html>
          `;
};
