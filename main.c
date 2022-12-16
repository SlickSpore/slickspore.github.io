/*
 *	Twe:
 *
 *	The Worst Text Editor
 *
 *	This is a really basic text Editor made to
 *	make the programmer's life bad as the earthworm's one.
 *	
 *	Press ESC to enter the COMMAND.
 *	
 *	USAGE:
 *	
 *	twe [...file to open]
 *
 *	:ln			Prints The line Number Once Called
 *	:gt<ln>		Sets the cursor to the requested line
 *	:!!<fl>		Saves to a file 
 *	:?			Exits the program
 */

#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <stdlib.h>

#define MAX_LINES 10000

void ln(){
	printf("LINE\n");
}

void gt(){
	printf("GOTO\n");
}

void sf(){
	printf("SAVE\n");
}

void of(){
	printf("OPEN\n");
}

void wl(){
	printf("WRITE\n");
}

int mtc(char fs[],char tm[]){

	int mch = 0;
	char *ptr1 = fs;
	char *ptr2 = tm;
	int lt = strlen(tm);
    int fl = strlen(fs);


	for (int j = 0; j < lt; j++){
		if(*ptr1 == *ptr2){
            ++mch;
			ptr1++;
			ptr2++;
		}else{
			ptr2++;
		}

		if (mch==fl){
            return(1);
		}

	}
	return(0);

}

int commands(char fc[]){



	if (mtc(fc,"gt")!= 0){
		gt();
	}
	if(mtc(fc,"ln")!= 0){
		ln();
	}
	if(mtc(fc,"!!")!= 0){
		sf();
	}
	if(mtc(fc,"?")!= 0){
		exit(0);
	}
	else {
		return(-1);
	}

}

int main(int argc, const char *argv[]){

	char cm[6];
	char c;
	int i = 0;
	bool broken = false;

	while (true){
		c = getchar();
		
		memset(cm,'\0',strlen(cm));


		if (c == ':'){
			broken = false;
			c = getchar();
			i = 0;

			while(c != ' '){
				if (c == '\n'){broken = true; break;}
				cm[i] = c;
				i++;
				c = getchar();
			}
			if (broken == false){
				int status = commands(cm);
				if (status != -1){
					c = getchar();
				}
			}
			
		
		}
		
	}
	 
}




