package cloudvandana;

import java.util.Arrays;
import java.util.Random;

public class program1 {

	public static void main(String[] args) {

		int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
		
		Random r=new Random();
		for (int i = 0; i < arr.length; i++) {

			int random=r.nextInt(arr.length);
			int temp=arr[random];
			arr[random]=arr[i];
			arr[i]=temp;
		}
		System.out.println(Arrays.toString(arr));

	}
}