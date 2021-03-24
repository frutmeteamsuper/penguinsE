var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');
var smtpPassword = require('aws-smtp-credentials');

module.exports = (newBookAppToUser) => {
  var transporter = nodemailer.createTransport({
      port: 465,
  host: 'email-smtp.us-east-1.amazonaws.com',
  secure: true,
  auth: {
    user:'',
    pass: '',
  },
  debug: true
  
  });

  const mailOptions = {

    from: '"andesproadventures.com"<info@andesproadventures.com>',
    to: newBookAppToUser.email,
    subject: newBookAppToUser.asunto,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
   <head>
      <style>
         .banner-color {
         background-color: #ffd200;
         }
         .title-color {
         color: #000;
         }
         .button-color {
         background-color: #000;
         }
         @media screen and (min-width: 500px) {
         .banner-color {
         background-color: #ffd200;
         }
         .title-color {
         color: #eb681f;
         }
         .button-color {
         background-color: black;
         }
         }
      </style>
   </head>
   <body>
      <div style="background-color:#ececec;padding:0;margin:0 auto;font-weight:200;max-width:600!important">
         <table align="center" border="0" cellspacing="0" cellpadding="0" style="table-layout:fixed;font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
            <tbody>
               <tr>
                  <td align="center">
                     <center style="width:100%">
                        <table bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;max-width:512px;font-weight:200;width:inherit;font-family:Helvetica,Arial,sans-serif" width="512" >
                           <tbody>
                    
                              <tr>
                                 <td align="left">
                                    <table border="0" cellspacing="0" cellpadding="0" style="font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
                                       <tbody>
                                          <tr>
                                             <td width="100%">
                                                <table border="0" cellspacing="0" cellpadding="0" style="font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
                                                   <tbody>
                                                      <tr>
                                                         <td align="center" style="padding:20px 0 10px 0">
                                                            <table border="0" cellspacing="0" cellpadding="0" style="font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
                                                               <tbody>
                                                                      <tr>
                                                                     <td align="center" width="100%">
                                                                        
                                                                            <img src="https://www.andesproadventures.com/assets/media/book/logo.png"  border="0" alt="" / >
                                                                        </td>
                                                                     </td>
                                                                   
                                                                  </tr>
                                                                 
                                                               </tbody>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td align="center"  style="padding:0px 20px 20px 0px;" class="banner-color">
                                                            <table border="0" cellspacing="0" cellpadding="0" style="font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
                                                               <tbody>
                                                                  <tr>
                                                                     <td align="center"  style="width: 50%;">
                                                                        
                                                                    <img src="https://www.andesproadventures.com/assets/media/book/booking1.png" border="0" alt="" / >
                                                                        </td>
                                                                     </td>
                                                                    
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                  
                                                      <tr>
                                                         <td align="center" style="padding:20px 20px 10px 20px">
                                                            <table border="0" cellspacing="0" cellpadding="0" style="font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
                                                               <tbody>
                                                                  <tr>
                                                                        <h3 style="font-weight: 600; padding: 0px; margin: 0px; font-size: 25px; line-height: 24px; text-align: left;" class="title-color">Hola ${newBookAppToUser.nombre}, gracias por reservar con AndesProAdventures</h3>
                                                                        <p style="margin: 20px 20px 20px 20px;font-size: 25px;text-align: left;"> <b>Tour:</b> ${newBookAppToUser.productName}</p>
                                                                        <p style="margin: 20px 20px 20px 20px;font-size: 25px;text-align: left;"> <b>Nro. de Reserva:</b> ${newBookAppToUser.nroReserva}</p>
                                                                        <p style="margin: 20px 20px 20px 20px;font-size: 25px;text-align: left;"> <b>Fecha:</b> ${newBookAppToUser.fecha}</p>
                                                                        <p style="margin: 20px 20px 20px 20px;font-size: 25px;text-align: left;"> <b>Precio por persona:</b> ${newBookAppToUser.precioUni} <b>CLP</b></p>
                                                                        <p style="margin: 20px 20px 20px 20px;font-size: 25px;text-align: left;"> <b>Nro. de personas:</b> ${newBookAppToUser.cant}</p>
                                                                        <p style="margin: 20px 20px 20px 20px;font-size: 25px;text-align: left;"> <b>Monto total:</b> ${newBookAppToUser.monto} <b>CLP</b></p>
                                                                        <p style="margin: 20px 20px 20px 20px;font-size: 25px;text-align: left;"> <b>Monto requerido para confirmar (30%):</b> ${newBookAppToUser.adelanto} <b>CLP</b></p>
                                                                        <div style="font-weight: 200; text-align: center; margin: 25px;"><a style="padding:0.6em 1em;border-radius:600px;color:#ffffff;font-size:14px;text-decoration:none;font-weight:bold" class="button-color" href="https://andesproadventures.com/validation" >Confirmar reserva</a></div>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                      </tr>
                                                      <tr>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                              <tr>
                                 <td align="left">
                                    <table bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" style="padding:0 24px;color:#999999;font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" width="100%">
                                                <table border="0" cellspacing="0" cellpadding="0" style="font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
                                                   <tbody>
                                                     
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="center" width="100%">
                                                <table border="0" cellspacing="0" cellpadding="0" style="font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
                                                   <tbody>
                                                      <tr>
                                                         <td align="center" style="padding:0 0 8px 0" width="100%"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </center>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </body>
</html>`
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}
