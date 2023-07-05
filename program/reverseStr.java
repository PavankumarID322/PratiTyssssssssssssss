class reverseStr{
    public static void main(String[] args) {
        String st="Pavan";
        for(int i=st.length()-1;i>-1;i--){
            System.out.println(st.charAt(i));
        }
    }
}

class Occurance{
    public static void main(String[] args) {
        String str="Pavan";
        boolean[] bs=new boolean[str.length()];
        for(int i=0;i<str.length();i++){
            if(bs[i]==false){
                int count=0;
                for(int j=i;j<str.length();j++){
                    if(str.charAt(i)==str.charAt(j)){
                        count++;
                        bs[j]=true;
                    }
                }
                    System.out.println(str.charAt(i)+" "+count);
            }
        }
    }
}