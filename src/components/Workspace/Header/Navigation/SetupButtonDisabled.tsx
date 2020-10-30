import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

export const SetupButtonDisabled = (props: any) => {
  return (
    <IconButton {...props} aria-label="configuration">
      <SvgIcon>
        <svg width="24" height="24" opacity="0.3">
          <g>
            <path d="M22.842 9.207l-2.429-.352c-.083-.229-.162-.452-.259-.666l1.496-1.987c.422-.564.337-1.395-.202-1.934l-1.754-1.756a1.59 1.59 0 00-1.114-.474 1.36 1.36 0 00-.82.272L15.777 3.8c-.218-.1-.441-.18-.666-.264l-.353-2.395C14.655.434 14.004 0 13.242 0h-2.484c-.761 0-1.412.434-1.514 1.14L8.89 3.53c-.225.084-.449.165-.668.268L6.24 2.308a1.36 1.36 0 00-.82-.27c-.407 0-.814.17-1.116.474L2.546 4.267c-.54.54-.63 1.372-.208 1.936L3.82 8.188a8.91 8.91 0 00-.282.667l-2.378.353C.47 9.307 0 9.944 0 10.722v2.483c0 .778.47 1.416 1.159 1.515l2.429.353c.083.23.161.452.259.666L2.35 17.725c-.422.565-.337 1.397.202 1.935l1.754 1.756c.301.303.707.475 1.114.475.302 0 .585-.094.82-.269l1.984-1.486c.218.101.442.19.666.274l.354 2.413c.102.707.753 1.177 1.514 1.177h2.484c.762 0 1.413-.47 1.515-1.177l.354-2.424c.223-.083.446-.164.668-.268l1.983 1.488c.234.175.518.271.82.271.407 0 .814-.171 1.117-.474l1.756-1.756c.54-.54.63-1.37.208-1.935l-1.482-1.985c.102-.22.2-.444.282-.667l2.38-.353c.688-.1 1.157-.737 1.157-1.514v-2.483c0-.779-.47-1.416-1.158-1.516zm-3.677 4.964c-.137.444-.318.88-.54 1.297l-.224.422 2.005 2.678c-.005.007-.011.016-.02.025l-1.757 1.757a.135.135 0 01-.024.02l-2.678-2-.422.226c-.43.228-.867.413-1.298.546l-.457.146-.48 3.416c-.007.002-.016.096-.028.096h-2.484c-.01 0-.02-.094-.028-.095l-.478-3.39-.458-.17a7.488 7.488 0 01-1.297-.546l-.423-.23-2.682 2-.02-.018-1.756-1.757a.177.177 0 01-.02-.023l2.008-2.68-.228-.423a7.318 7.318 0 01-.537-1.297l-.154-.457-3.358-.472c-.001-.01-.127-.023-.127-.036v-2.483c0-.014.126-.026.127-.036l3.334-.473.158-.456c.136-.444.327-.881.547-1.297l.229-.423L3.593 5.36a.163.163 0 01.021-.025L5.37 3.579a.166.166 0 01.025-.02L8.074 5.56l.423-.223c.43-.229.867-.409 1.297-.541l.457-.137.479-3.399c.007-.002.017-.06.028-.06h2.484c.011 0 .02.057.028.06l.48 3.364.457.158c.446.137.882.328 1.297.548l.423.228 2.682-2a.21.21 0 01.02.02l1.755 1.755a.158.158 0 01.02.024l-2.007 2.68.227.423c.208.393.394.83.537 1.297l.155.457 3.357.472c.001.01.127.023.127.036v2.483c0 .014-.126.026-.127.036l-3.333.473-.175.457z" />
            <path d="M12 17.091a5.235 5.235 0 01-5.228-5.229A5.235 5.235 0 0112 6.634a5.235 5.235 0 015.229 5.228A5.236 5.236 0 0112 17.092zm0-9.235a4.01 4.01 0 00-4.006 4.006A4.01 4.01 0 0012 15.868a4.01 4.01 0 004.006-4.006A4.011 4.011 0 0012 7.856z" />
          </g>
        </svg>
      </SvgIcon>
    </IconButton>
  );
};
