import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class HealthCheckTest {
    @Test
    void alwaysPasses() {
        assertTrue(true, "Pipeline sanity test passes");
    }
}
