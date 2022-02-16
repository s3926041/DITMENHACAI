/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;

int main()
{
    int n;
    cout<<"Dit me m nhap n thg dan";
    cin>>n;
    
    int so_n_ban_dau = n;
    
    int counter = 0;
    
    if(n==2){
        counter++;
        cout<<2<<" ";
        n+=2;
    }
    if(n%2 ==0){
        n+=1;
    }
    
    while(counter != so_n_ban_dau){
        int check = 1;
        for(int i =2; i <=n/2;i++){
            if(n%i==0){
                check = 0; // = 0 thi ko phai so nguyen to vi no chia het cmmr
                break;
            }
        }
        
        if(check == 1){
            counter+=1;
            cout<<n<<" ";
        }
        n+=2;
    }
    

    return 0;
}
