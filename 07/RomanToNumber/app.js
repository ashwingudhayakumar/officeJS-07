const romanToNumber = (s) => {
   const legend = "IVXLCDM";
   const l=[1,5,10,50,100,500,1000];
   let sum=0;
   while(s){
      if(!!s[1] && legend.indexOf(s[0]) < legend.indexOf(s[1])){
         sum += (l[legend.indexOf(s[1])] - l[legend.indexOf(s[0])]);
         s = s.substring(2, s.length);
      } else {
         sum += l[legend.indexOf(s[0])];
         s = s.substring(1, s.length);
      }
   }
   return sum;
};
