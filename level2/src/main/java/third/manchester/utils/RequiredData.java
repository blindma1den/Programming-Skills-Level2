package third.manchester.utils;

import java.util.Scanner;
import java.util.function.Function;

import static third.manchester.utils.Printer.print;

public class RequiredData {
    public static final Scanner getScanner = new Scanner(System.in);
    public static Integer getInfoOf( String b,Function<Scanner,Integer> a){
        print(b);
        return a.apply(getScanner);
    }
    public static String getInfoStringOf( String b,Function<Scanner,String> a){
        print(b);
        return a.apply(getScanner);
    }
}
