package third.manchester.utils;

import java.util.function.Supplier;

public class Looper {
    public static void repeat(Supplier<Boolean> fun) {
        var shouldContinue = true;
        while (shouldContinue) {
            shouldContinue = fun.get();
        }
    }
}
