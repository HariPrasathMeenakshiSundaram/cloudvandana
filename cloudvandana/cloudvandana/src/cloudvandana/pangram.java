package cloudvandana;

import java.util.HashSet;

public class pangram {

	public static void main(String[] args) {
		String s = "Pack my box with five Dozen Liquor Jugs";
		s.toLowerCase();
		HashSet<Character> hs = new HashSet<>();
		for (int i = 0; i < s.length(); i++) {
			char ch = s.charAt(i);
			if (ch >= 97 && ch <= 122) {
				hs.add(ch);

			}
		}
		if (hs.size()==26) {
			System.out.println("Pangram");
		} else {
			System.out.println("Not a Pangram");
		}

	}

}
