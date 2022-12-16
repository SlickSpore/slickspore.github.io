#include <stdio.h>
#include <string.h>

int mtc(char fs[],char tm[]){

	int mch = 0;
	char *ptr1 = fc;
	char *ptr2 = tm;
	int lt = strlen(tm);
    int fl = strlen(fc);


	for (int j = 0; j < lt; j++){
		if(*ptr1 == *ptr2){

            ++mch;
			ptr1++;
			ptr2++;
		}else{
			ptr2++;
		}

		if (mch==fl){
			printf("Found A Match");
            break;
		}


	}



}

int main(){
    mtc("ods");
}