
//
// StyleDictionaryColor.m
//

// Do not edit directly, this file was auto-generated.


#import ".h"

@implementation 

+ (UIColor *)color:()colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
#78350fff,
#92400eff,
#b45309ff,
#d97706ff,
#f59e0bff,
#fffbebff,
#fbbf24ff,
#fcd34dff,
#fde68aff,
#fef3c7ff,
#14532dff,
#166534ff,
#15803dff,
#16a34aff,
#22c55eff,
#f0fdf4ff,
#4ade80ff,
#86efacff,
#bbf7d0ff,
#dcfce7ff,
#4c1d95ff,
#5b21b6ff,
#6d28d9ff,
#7c3aedff,
#8b5cf6ff,
#f5f3ffff,
#a78bfaff,
#c4b5fdff,
#ddd6feff,
#ede9feff,
#0f172aff,
#1e293bff,
#334155ff,
#475569ff,
#64748bff,
#f8fafcff,
#94a3b8ff,
#cbd5e1ff,
#e2e8f0ff,
#f1f5f9ff,
#1e3a8aff,
#1e40afff,
#1d4ed8ff,
#2563ebff,
#3b82f6ff,
#eff6ffff,
#60a5faff,
#93c5fdff,
#bfdbfeff,
#dbeafeff,
#7f1d1dff,
#991b1bff,
#b91c1cff,
#dc2626ff,
#ef4444ff,
#fef2f2ff,
#f87171ff,
#fca5a5ff,
#fecacaff,
#fee2e2ff,
#ffffffff,
#000000ff,
#000000ff,
#000000ff,
#0000000d,
#0000001a,
#0000001a,
#0000001a,
#0000001a,
#0000001a,
#0000001a,
#0000001a,
#0000001a,
#0000000d,
#00000040
    ];
  });

  return colorArray;
}

@end